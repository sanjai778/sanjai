import { CompareController } from "../../../../controller/CompareController";
import { NextRequest } from "next/server";

const compareController = new CompareController();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  return compareController.getCompareById(req, { params });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  return compareController.updateCompare(req, { params });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  return compareController.deleteCompare(req, { params });
}
