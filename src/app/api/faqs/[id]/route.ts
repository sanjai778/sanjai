import { FaqController } from "../../../../controller/FaqController";
import { NextRequest, NextResponse } from "next/server";

const faqController = new FaqController();

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  console.log(`Fetching FAQ with id: ${id}`);
  return faqController.getFaqById(req, { params: { id } });
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  console.log(`Updating FAQ with id: ${id}`);
  return faqController.updateFaq(req, { params: { id } });
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  console.log(`Deleting FAQ with id: ${id}`);
  return faqController.deleteFaq(req, { params: { id } });
}
