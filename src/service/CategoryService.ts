import { Category } from "../entity/Category";
import { CategoryRepository } from "../repository/CategoryRepository";

export class CategoryService {
  private categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async getAll() {
    return this.categoryRepository.getAll();
  }

  async getById(id: number) {
    return this.categoryRepository.getById(id);
  }

  async create(categoryData: Partial<Category>) {
    return this.categoryRepository.create(categoryData);
  }

  async update(id: number, categoryData: Partial<Category>) {
    return this.categoryRepository.update(id, categoryData);
  }

  async delete(id: number) {
    return this.categoryRepository.delete(id);
  }
}
