import { TestimonialController } from "@/controller/TestimonialController";
import { NextRequest, NextResponse } from "next/server";
import "reflect-metadata";

const testimonialController = new TestimonialController();

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  console.log(`Fetching testimonial with id: ${id}`);
  return testimonialController.getById(parseInt(id, 10));
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  console.log(`Updating testimonial with id: ${id}`);
  return testimonialController.update(parseInt(id, 10), request);
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  console.log(`Deleting testimonial with id: ${id}`);
  return testimonialController.delete(parseInt(id, 10));
}
