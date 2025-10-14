import { Repository } from "typeorm";
import { Testimonial } from "../entity/Testimonial";
import { getDBConnection } from "@/lib/db";

export class TestimonialRepository {
  private async getRepository(): Promise<Repository<Testimonial>> {
    const connection = await getDBConnection();
    return connection.getRepository(Testimonial);
  }

  async getAll() {
    try {
      const repository = await this.getRepository();
      return repository.find();
    } catch (error) {
      console.error("Error getting all testimonials:", error);
      throw error;
    }
  }

  async getById(id: number) {
    try {
      const repository = await this.getRepository();
      return repository.findOne({ where: { id } });
    } catch (error) {
      console.error(`Error getting testimonial by id ${id}:`, error);
      throw error;
    }
  }

  async create(testimonialData: Partial<Testimonial>) {
    try {
      const repository = await this.getRepository();
      const newTestimonial = repository.create(testimonialData);
      return repository.save(newTestimonial);
    } catch (error) {
      console.error("Error creating testimonial:", error);
      throw error;
    }
  }

  async update(id: number, testimonialData: Partial<Testimonial>) {
    try {
      const repository = await this.getRepository();
      await repository.update(id, testimonialData);
      return this.getById(id);
    } catch (error) {
      console.error(`Error updating testimonial with id ${id}:`, error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      const repository = await this.getRepository();
      return repository.delete(id);
    } catch (error) {
      console.error(`Error deleting testimonial with id ${id}:`, error);
      throw error;
    }
  }
}
