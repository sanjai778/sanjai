import { Repository } from "typeorm";
import { Category } from "../entity/Category";
import { getDBConnection } from "@/lib/db";

export class CategoryRepository {
  private async getRepository(): Promise<Repository<Category>> {
    const connection = await getDBConnection();
    return connection.getRepository(Category);
  }

  async getAll() {
    try {
      const repository = await this.getRepository();
      return repository.find({
        relations: {
          blogs: true,
        },
        select: {
          id: true,
          name: true,
          blogs: {
            id: true,
            title: true,
            slug: true,
            date: true,
            featuredImage: true,
            content: true,
          },
        },
      });
    } catch (error) {
      console.error("Error getting all categories:", error);
      throw error;
    }
  }

  async getById(id: number) {
    try {
      const repository = await this.getRepository();
      return repository.findOne({
        where: { id },
        relations: {
          blogs: true,
        },
        select: {
          id: true,
          name: true,
          blogs: {
            id: true,
            title: true,
            slug: true,
            date: true,
            featuredImage: true,
            content: true,
          },
        },
      });
    } catch (error) {
      console.error(`Error getting category by id ${id}:`, error);
      throw error;
    }
  }

  async create(categoryData: Partial<Category>) {
    try {
      const repository = await this.getRepository();
      const newCategory = repository.create(categoryData);
      return repository.save(newCategory);
    } catch (error) {
      console.error("Error creating category:", error);
      throw error;
    }
  }

  async update(id: number, categoryData: Partial<Category>) {
    try {
      const repository = await this.getRepository();
      await repository.update(id, categoryData);
      return this.getById(id);
    } catch (error) {
      console.error(`Error updating category with id ${id}:`, error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      const repository = await this.getRepository();
      return repository.delete(id);
    } catch (error) {
      console.error(`Error deleting category with id ${id}:`, error);
      throw error;
    }
  }
}
