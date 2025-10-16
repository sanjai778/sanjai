import { Repository } from "typeorm";
import { Blog } from "../entity/Blog";
import { getDBConnection } from "@/lib/db";

export class BlogRepository {
  private async getRepository(): Promise<Repository<Blog>> {
    const connection = await getDBConnection();
    return connection.getRepository(Blog);
  }

  async getAll(limit?: number) {
    try {
      const repository = await this.getRepository();
      return repository.find({
        select: ["id", "title", "slug", "date", "featuredImage", "categories", "content"],
        relations: ["categories"],
        order: {
          date: "DESC",
        },
        take: limit,
      });
    } catch (error) {
      console.error("Error getting all blogs:", error);
      throw error;
    }
  }

  async getById(id: number) {
    try {
      const repository = await this.getRepository();
      return repository.findOne({ where: { id }, relations: ["categories"] });
    } catch (error) {
      console.error(`Error getting blog by id ${id}:`, error);
      throw error;
    }
  }

  async getBySlug(slug: string) {
    try {
      const repository = await this.getRepository();
      return repository.findOne({ where: { slug }, relations: ["categories"] });
    } catch (error) {
      console.error(`Error getting blog by slug ${slug}:`, error);
      throw error;
    }
  }

  async create(blogData: Partial<Blog>) {
    try {
      const repository = await this.getRepository();
      const newBlog = repository.create(blogData);
      return repository.save(newBlog);
    } catch (error) {
      console.error("Error creating blog:", error);
      throw error;
    }
  }

  async update(id: number, blogData: Partial<Blog>) {
    try {
      const repository = await this.getRepository();
      await repository.update(id, blogData);
      return this.getById(id);
    } catch (error) {
      console.error(`Error updating blog with id ${id}:`, error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      const repository = await this.getRepository();
      return repository.delete(id);
    } catch (error) {
      console.error(`Error deleting blog with id ${id}:`, error);
      throw error;
    }
  }
}
