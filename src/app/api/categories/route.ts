import { CategoryController } from "@/controller/CategoryController";
import "reflect-metadata";

const categoryController = new CategoryController();

export async function GET() {
  console.log("Fetching all categories");
  return categoryController.getAll();
}

export async function POST(request: Request) {
  console.log("Creating a new category");
  return categoryController.create(request);
}
