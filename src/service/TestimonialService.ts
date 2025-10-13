import { Testimonial } from "../entity/Testimonial";
import { TestimonialRepository } from "../repository/TestimonialRepository";

export class TestimonialService {
  private testimonialRepository: TestimonialRepository;

  constructor() {
    this.testimonialRepository = new TestimonialRepository();
  }

  async getAll() {
    return this.testimonialRepository.getAll();
  }

  async getById(id: number) {
    return this.testimonialRepository.getById(id);
  }

  async create(testimonialData: Partial<Testimonial>) {
    return this.testimonialRepository.create(testimonialData);
  }

  async update(id: number, testimonialData: Partial<Testimonial>) {
    return this.testimonialRepository.update(id, testimonialData);
  }

  async delete(id: number) {
    return this.testimonialRepository.delete(id);
  }
}
