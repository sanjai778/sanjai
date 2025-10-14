import { Category } from "../entity/Category";
import { CategoryRepository } from "../repository/CategoryRepository";

export class CategoryService {
  private categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async getAll() {
    try {
      return this.categoryRepository.getAll();
    } catch (error) {
      console.error("Error getting all categories:", error);
      throw error;
    }
  }

  async getById(id: number) {
    try {
      return this.categoryRepository.getById(id);
    } catch (error) {
      console.error(`Error getting category by id ${id}:`, error);
      throw error;
    }
  }

  async create(categoryData: Partial<Category>) {
    try {
      return this.categoryRepository.create(categoryData);
    } catch (error) {
      console.error("Error creating category:", error);
      throw error;
    }
  }

  async update(id: number, categoryData: Partial<Category>) {
    try {
      return this.categoryRepository.update(id, categoryData);
    } catch (error) {
      console.error(`Error updating category with id ${id}:`, error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      return this.categoryRepository.delete(id);
    } catch (error) {
      console.error(`Error deleting category with id ${id}:`, error);
      throw error;
    }
  }
}
