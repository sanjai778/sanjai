import { BlogService } from "@/service/BlogService";
import { Blog } from "@/entity/Blog";

const blogService = new BlogService();

export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  try {
    const blogs = await blogService.getAll();
    return blogs.map(blog => ({ slug: blog.slug }));
  } catch (error) {
    console.error("API ERROR fetching all slugs:", error);
    return []; // Return empty on error
  }
}

export async function getPostBySlug(slug: string): Promise<Blog | null> {
  try {
    const blogs = await blogService.getAll();
    const blog = blogs.find(b => b.slug === slug);
    return blog || null;
  } catch (error) {
    console.error(`API ERROR fetching slug [${slug}]:`, error);
    return null; // Return null on error
  }
}
