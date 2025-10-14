import { Repository } from "typeorm";
import { Category } from "../entity/Category";
import { getDBConnection } from "@/lib/db";

export class CategoryRepository {
  private async getRepository(): Promise<Repository<Category>> {
    const connection = await getDBConnection();
    return connection.getRepository(Category);
  }

  async getAll() {
    const repository = await this.getRepository();
    return repository.find({ relations: ["blogs"] });
  }

  async getById(id: number) {
    const repository = await this.getRepository();
    return repository.findOne({ where: { id }, relations: ["blogs"] });
  }

  async create(categoryData: Partial<Category>) {
    const repository = await this.getRepository();
    const newCategory = repository.create(categoryData);
    return repository.save(newCategory);
  }

  async update(id: number, categoryData: Partial<Category>) {
    const repository = await this.getRepository();
    await repository.update(id, categoryData);
    return this.getById(id);
  }

  async delete(id: number) {
    const repository = await this.getRepository();
    return repository.delete(id);
  }
}