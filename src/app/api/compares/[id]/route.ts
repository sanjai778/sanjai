import { CompareController } from "../../../../controller/CompareController";
import { NextRequest, NextResponse } from "next/server";

const compareController = new CompareController();

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  console.log(`Fetching compare with id: ${id}`);
  return compareController.getCompareById(req, { params: { id } });
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  console.log(`Updating compare with id: ${id}`);
  return compareController.updateCompare(req, { params: { id } });
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  console.log(`Deleting compare with id: ${id}`);
  return compareController.deleteCompare(req, { params: { id } });
}
