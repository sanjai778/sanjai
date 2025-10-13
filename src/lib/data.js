// src/lib/data.js
import mysql from 'mysql2/promise';

// Reusable database connection function
async function createDbConnection() {
  return await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
}

// Function to get all post slugs for generateStaticParams
export async function getAllPostSlugs() {
  const connection = await createDbConnection();
  try {
    const query = `
      SELECT post_name 
      FROM wpsw_posts
      WHERE post_type = 'post' AND post_status = 'publish';
    `;
    const [rows] = await connection.query(query);
    await connection.end();
    return rows;
  } catch (error) {
    await connection.end();
    console.error("DATABASE ERROR fetching all slugs:", error);
    return []; // Return empty on error
  }
}

// Function to get a single post's data by its slug
export async function getPostBySlug(slug) {
  const connection = await createDbConnection();
  try {
    const query = `
      SELECT 
        p.ID, p.post_title, p.post_content, p.post_date, p.post_name,
        image_meta.meta_value AS featured_image_url
      FROM wpsw_posts AS p
      LEFT JOIN wpsw_postmeta AS thumb_meta ON p.ID = thumb_meta.post_id AND thumb_meta.meta_key = '_thumbnail_id'
      LEFT JOIN wpsw_postmeta AS image_meta ON thumb_meta.meta_value = image_meta.post_id AND image_meta.meta_key = '_wp_attached_file'
      WHERE p.post_type = 'post' AND p.post_status = 'publish' AND p.post_name = ?
      LIMIT 1;
    `;
    const [rows] = await connection.query(query, [slug]);
    await connection.end();
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    await connection.end();
    console.error(`DATABASE ERROR fetching slug [${slug}]:`, error);
    return null; // Return null on error
  }
}