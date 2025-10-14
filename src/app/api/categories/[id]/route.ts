import { CategoryController } from "@/controller/CategoryController";
import "reflect-metadata";

const categoryController = new CategoryController();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log(`Fetching category with id: ${params.id}`);
  const id = parseInt(params.id, 10);
  return categoryController.getById(id);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log(`Updating category with id: ${params.id}`);
  const id = parseInt(params.id, 10);
  return categoryController.update(id, request);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log(`Deleting category with id: ${params.id}`);
  const id = parseInt(params.id, 10);
  return categoryController.delete(id);
}
