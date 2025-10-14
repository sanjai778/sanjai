import { CompareController } from "../../../../controller/CompareController";
import { NextRequest } from "next/server";

const compareController = new CompareController();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  console.log(`Fetching compare with id: ${params.id}`);
  return compareController.getCompareById(req, { params });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  console.log(`Updating compare with id: ${params.id}`);
  return compareController.updateCompare(req, { params });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  console.log(`Deleting compare with id: ${params.id}`);
  return compareController.deleteCompare(req, { params });
}
