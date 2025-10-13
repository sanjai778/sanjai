import { Repository } from "typeorm";
import { Testimonial } from "../entity/Testimonial";
import { getDBConnection } from "@/lib/db";

export class TestimonialRepository {
  private async getRepository(): Promise<Repository<Testimonial>> {
    const connection = await getDBConnection();
    return connection.getRepository(Testimonial);
  }

  async getAll() {
    const repository = await this.getRepository();
    return repository.find();
  }

  async getById(id: number) {
    const repository = await this.getRepository();
    return repository.findOne({ where: { id } });
  }

  async create(testimonialData: Partial<Testimonial>) {
    const repository = await this.getRepository();
    const newTestimonial = repository.create(testimonialData);
    return repository.save(newTestimonial);
  }

  async update(id: number, testimonialData: Partial<Testimonial>) {
    const repository = await this.getRepository();
    await repository.update(id, testimonialData);
    return this.getById(id);
  }

  async delete(id: number) {
    const repository = await this.getRepository();
    return repository.delete(id);
  }
}
