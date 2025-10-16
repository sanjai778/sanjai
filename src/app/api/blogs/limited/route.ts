import { BlogController } from "../../../../controller/BlogController";
import { NextRequest } from "next/server";

const blogController = new BlogController();

export async function GET(req: NextRequest) {
  return blogController.getLimitedBlogs(req);
}
