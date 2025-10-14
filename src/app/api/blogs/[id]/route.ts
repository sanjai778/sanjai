import { BlogController } from "@/controller/BlogController";
import "reflect-metadata";

const blogController = new BlogController();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  return blogController.getById(id);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  return blogController.update(id, request);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  return blogController.delete(id);
}
