import { BlogController } from "@/controller/BlogController";
import "reflect-metadata";

const blogController = new BlogController();

export async function GET() {
  return blogController.getAll();
}

export async function POST(request: Request) {
  return blogController.create(request);
}
