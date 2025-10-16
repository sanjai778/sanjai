import { CompareController } from "../../../../controller/CompareController";
import { NextRequest, NextResponse } from "next/server";

const compareController = new CompareController();

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  console.log(`Fetching compare with slug: ${slug}`);
  return compareController.getCompareBySlug(req, { params: { slug } });
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  console.log(`Updating compare with slug: ${slug}`);
  // Assuming updateCompare can also work with a slug, or you'd create a new method for it.
  // For now, this will fail if updateCompare expects an ID.
  return compareController.updateCompare(req, { params: { id: slug } });
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  console.log(`Deleting compare with slug: ${slug}`);
  // Assuming deleteCompare can also work with a slug, or you'd create a new method for it.
  // For now, this will fail if deleteCompare expects an ID.
  return compareController.deleteCompare(req, { params: { id: slug } });
}
