import { Blog } from "@/entity/Blog";
import { BlogRepository } from "@/repository/BlogRepository";

export class BlogService {
  private blogRepository: BlogRepository;

  constructor() {
    this.blogRepository = new BlogRepository();
  }

  async getAll() {
    try {
      return this.blogRepository.getAll();
    } catch (error) {
      console.error("Error getting all blogs:", error);
      throw error;
    }
  }

  async getById(id: number) {
    try {
      return this.blogRepository.getById(id);
    } catch (error) {
      console.error(`Error getting blog by id ${id}:`, error);
      throw error;
    }
  }

  async getBySlug(slug: string) {
    try {
      return this.blogRepository.getBySlug(slug);
    } catch (error) {
      console.error(`Error getting blog by slug ${slug}:`, error);
      throw error;
    }
  }

  async create(blogData: Partial<Blog>) {
    try {
      return this.blogRepository.create(blogData);
    } catch (error) {
      console.error("Error creating blog:", error);
      throw error;
    }
  }

  async update(id: number, blogData: Partial<Blog>) {
    try {
      return this.blogRepository.update(id, blogData);
    } catch (error) {
      console.error(`Error updating blog with id ${id}:`, error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      return this.blogRepository.delete(id);
    } catch (error) {
      console.error(`Error deleting blog with id ${id}:`, error);
      throw error;
    }
  }
}
