import { CategoryController } from "@/controller/CategoryController";
import "reflect-metadata";

const categoryController = new CategoryController();

export async function GET() {
  return categoryController.getAll();
}

export async function POST(request: Request) {
  return categoryController.create(request);
}
