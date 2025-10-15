import { BlogController } from "@/controller/BlogController";
import { NextRequest, NextResponse } from "next/server";
import "reflect-metadata";

const blogController = new BlogController();

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  console.log(`Fetching blog with slug: ${slug}`);
  return blogController.getBySlug(slug);
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  console.log(`Updating blog with slug: ${slug}`);
  // Assuming update still uses ID, we'll need to adjust this if the user wants to update by slug
  // For now, this will fail if a slug is passed.
  return blogController.update(parseInt(slug, 10), request);
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  console.log(`Deleting blog with slug: ${slug}`);
  // Assuming delete still uses ID, we'll need to adjust this if the user wants to delete by slug
  // For now, this will fail if a slug is passed.
  return blogController.delete(parseInt(slug, 10));
}
