import { Blog } from "../entity/Blog";
import { BlogRepository } from "../repository/BlogRepository";

export class BlogService {
  private blogRepository: BlogRepository;

  constructor() {
    this.blogRepository = new BlogRepository();
  }

  async getAll() {
    return this.blogRepository.getAll();
  }

  async getById(id: number) {
    return this.blogRepository.getById(id);
  }

  async create(blogData: Partial<Blog>) {
    return this.blogRepository.create(blogData);
  }

  async update(id: number, blogData: Partial<Blog>) {
    return this.blogRepository.update(id, blogData);
  }

  async delete(id: number) {
    return this.blogRepository.delete(id);
  }
}
