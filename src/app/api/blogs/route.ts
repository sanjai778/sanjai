import { BlogController } from "@/controller/BlogController";
import "reflect-metadata";

const blogController = new BlogController();

export async function GET() {
  console.log("Fetching all blogs");
  return blogController.getAll();
}
