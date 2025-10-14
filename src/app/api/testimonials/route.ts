import { TestimonialController } from "@/controller/TestimonialController";
import "reflect-metadata";

const testimonialController = new TestimonialController();

export async function GET() {
  console.log("Fetching all testimonials");
  return testimonialController.getAll();
}

export async function POST(request: Request) {
  console.log("Creating a new testimonial");
  return testimonialController.create(request);
}
