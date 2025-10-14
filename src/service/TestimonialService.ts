import { Testimonial } from "../entity/Testimonial";
import { TestimonialRepository } from "../repository/TestimonialRepository";

export class TestimonialService {
  private testimonialRepository: TestimonialRepository;

  constructor() {
    this.testimonialRepository = new TestimonialRepository();
  }

  async getAll() {
    try {
      return this.testimonialRepository.getAll();
    } catch (error) {
      console.error("Error getting all testimonials:", error);
      throw error;
    }
  }

  async getById(id: number) {
    try {
      return this.testimonialRepository.getById(id);
    } catch (error) {
      console.error(`Error getting testimonial by id ${id}:`, error);
      throw error;
    }
  }

  async create(testimonialData: Partial<Testimonial>) {
    try {
      return this.testimonialRepository.create(testimonialData);
    } catch (error) {
      console.error("Error creating testimonial:", error);
      throw error;
    }
  }

  async update(id: number, testimonialData: Partial<Testimonial>) {
    try {
      return this.testimonialRepository.update(id, testimonialData);
    } catch (error) {
      console.error(`Error updating testimonial with id ${id}:`, error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      return this.testimonialRepository.delete(id);
    } catch (error) {
      console.error(`Error deleting testimonial with id ${id}:`, error);
      throw error;
    }
  }
}
