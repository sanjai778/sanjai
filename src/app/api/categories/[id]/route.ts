import { CategoryController } from "@/controller/CategoryController";
import { NextRequest, NextResponse } from "next/server";
import "reflect-metadata";

const categoryController = new CategoryController();

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  console.log(`Fetching category with id: ${id}`);
  return categoryController.getById(parseInt(id, 10));
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  console.log(`Updating category with id: ${id}`);
  return categoryController.update(parseInt(id, 10), request);
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  console.log(`Deleting category with id: ${id}`);
  return categoryController.delete(parseInt(id, 10));
}
