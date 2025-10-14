import { TestimonialController } from "@/controller/TestimonialController";
import "reflect-metadata";

const testimonialController = new TestimonialController();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  return testimonialController.getById(id);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  return testimonialController.update(id, request);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  return testimonialController.delete(id);
}
