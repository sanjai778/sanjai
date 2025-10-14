import { BlogController } from "@/controller/BlogController";
import "reflect-metadata";

const blogController = new BlogController();

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  console.log(`Fetching blog with slug: ${slug}`);
  return blogController.getBySlug(slug);
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  console.log(`Updating blog with slug: ${params.slug}`);
  // Assuming update still uses ID, we'll need to adjust this if the user wants to update by slug
  // For now, this will fail if a slug is passed.
  return blogController.update(parseInt(params.slug, 10), request);
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  console.log(`Deleting blog with slug: ${params.slug}`);
  // Assuming delete still uses ID, we'll need to adjust this if the user wants to delete by slug
  // For now, this will fail if a slug is passed.
  return blogController.delete(parseInt(params.slug, 10));
}
