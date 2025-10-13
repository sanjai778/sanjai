import { TestimonialController } from "@/controller/TestimonialController";
import "reflect-metadata";

const testimonialController = new TestimonialController();

export async function GET() {
  return testimonialController.getAll();
}

export async function POST(request: Request) {
  return testimonialController.create(request);
}
