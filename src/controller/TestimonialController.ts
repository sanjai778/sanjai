import { TestimonialService } from "@/service/TestimonialService";
import { NextResponse } from "next/server";

export class TestimonialController {
  private testimonialService: TestimonialService;

  constructor() {
    this.testimonialService = new TestimonialService();
  }

  async getAll() {
    try {
      const testimonials = await this.testimonialService.getAll();
      return NextResponse.json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return new NextResponse(
        JSON.stringify({ error: "Failed to fetch testimonials" }),
        { status: 500 }
      );
    }
  }

  async getById(id: number) {
    try {
      const testimonial = await this.testimonialService.getById(id);
      if (!testimonial) {
        return new NextResponse(JSON.stringify({ error: "Testimonial not found" }), {
          status: 404,
        });
      }
      return NextResponse.json(testimonial);
    } catch (error) {
      console.error(`Error fetching testimonial with id ${id}:`, error);
      return new NextResponse(
        JSON.stringify({ error: "Failed to fetch testimonial" }),
        { status: 500 }
      );
    }
  }

  async create(request: Request) {
    try {
      const body = await request.json();
      const newTestimonial = await this.testimonialService.create(body);
      return new NextResponse(JSON.stringify(newTestimonial), { status: 201 });
    } catch (error) {
      console.error("Error creating testimonial:", error);
      return new NextResponse(
        JSON.stringify({ error: "Failed to create testimonial" }),
        { status: 500 }
      );
    }
  }

  async update(id: number, request: Request) {
    try {
      const body = await request.json();
      const updatedTestimonial = await this.testimonialService.update(id, body);
      return NextResponse.json(updatedTestimonial);
    } catch (error) {
      console.error(`Error updating testimonial with id ${id}:`, error);
      return new NextResponse(
        JSON.stringify({ error: "Failed to update testimonial" }),
        { status: 500 }
      );
    }
  }

  async delete(id: number) {
    try {
      await this.testimonialService.delete(id);
      return new NextResponse(null, { status: 204 });
    } catch (error) {
      console.error(`Error deleting testimonial with id ${id}:`, error);
      return new NextResponse(
        JSON.stringify({ error: "Failed to delete testimonial" }),
        { status: 500 }
      );
    }
  }
}
