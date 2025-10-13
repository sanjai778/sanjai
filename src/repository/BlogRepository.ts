import { Repository } from "typeorm";
import { Blog } from "../entity/Blog";
import { getDBConnection } from "@/lib/db";

export class BlogRepository {
  private async getRepository(): Promise<Repository<Blog>> {
    const connection = await getDBConnection();
    return connection.getRepository(Blog);
  }

  async getAll() {
    const repository = await this.getRepository();
    return repository.find({ relations: ["categories"] });
  }

  async getById(id: number) {
    const repository = await this.getRepository();
    return repository.findOne({ where: { id }, relations: ["categories"] });
  }

  async create(blogData: Partial<Blog>) {
    const repository = await this.getRepository();
    const newBlog = repository.create(blogData);
    return repository.save(newBlog);
  }

  async update(id: number, blogData: Partial<Blog>) {
    const repository = await this.getRepository();
    await repository.update(id, blogData);
    return this.getById(id);
  }

  async delete(id: number) {
    const repository = await this.getRepository();
    return repository.delete(id);
  }
}
