import "reflect-metadata";
import { createConnection } from "typeorm";
import { Blog } from "./src/entity/Blog";
import { Category } from "./src/entity/Category";

async function transferData() {
  const sourceConnection = await createConnection("default");
  const destinationConnection = await createConnection("new_db");

  const posts = await sourceConnection.query("SELECT * FROM wpsw_posts WHERE post_type = 'post' AND post_status = 'publish'");

  for (const post of posts) {
    // Get Thumbnail ID
    const thumbnailIdMeta = await sourceConnection.query("SELECT meta_value FROM wpsw_postmeta WHERE post_id = ? AND meta_key = '_thumbnail_id'", [post.ID]);
    let featuredImageUrl = '';

    if (thumbnailIdMeta.length > 0) {
      const thumbnailId = thumbnailIdMeta[0].meta_value;
      // Get Image URL from the attachment's GUID
      const guidMeta = await sourceConnection.query("SELECT guid FROM wpsw_posts WHERE ID = ?", [thumbnailId]);
      if (guidMeta.length > 0) {
        featuredImageUrl = guidMeta[0].guid;
      }
    }

    const categoryData = await sourceConnection.query(`
      SELECT t.name FROM wpsw_terms t
      INNER JOIN wpsw_term_taxonomy tt ON t.term_id = tt.term_id
      INNER JOIN wpsw_term_relationships tr ON tt.term_taxonomy_id = tr.term_taxonomy_id
      WHERE tt.taxonomy = 'category' AND tr.object_id = ?
    `, [post.ID]);

    const categories = [];
    for (const cat of categoryData) {
      let category = await destinationConnection.getRepository(Category).findOne({ where: { name: cat.name } });
      if (!category) {
        category = new Category();
        category.name = cat.name;
        await destinationConnection.getRepository(Category).save(category);
      }
      categories.push(category);
    }

    const transferredPost = new Blog();
    transferredPost.title = post.post_title;
    transferredPost.content = post.post_content;
    transferredPost.date = post.post_date;
    transferredPost.status = post.post_status;
    transferredPost.createdAt = post.post_date.toISOString().slice(0, 19).replace('T', ' ') === '0000-00-00 00:00:00' ? null : post.post_date;
    transferredPost.lastModified = post.post_modified.toISOString().slice(0, 19).replace('T', ' ') === '0000-00-00 00:00:00' ? null : post.post_modified;
    transferredPost.postType = post.post_type;
    transferredPost.slug = post.post_name;
    transferredPost.categories = categories;
    transferredPost.featuredImage = featuredImageUrl;

    await destinationConnection.getRepository(Blog).save(transferredPost);
  }

  console.log("Data transfer complete!");

  await sourceConnection.close();
  await destinationConnection.close();
}

transferData().catch(error => console.error(error));
