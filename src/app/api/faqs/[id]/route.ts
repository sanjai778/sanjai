import { FaqController } from "../../../../controller/FaqController";
import { NextRequest } from "next/server";

const faqController = new FaqController();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  console.log(`Fetching FAQ with id: ${params.id}`);
  return faqController.getFaqById(req, { params });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  console.log(`Updating FAQ with id: ${params.id}`);
  return faqController.updateFaq(req, { params });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  console.log(`Deleting FAQ with id: ${params.id}`);
  return faqController.deleteFaq(req, { params });
}
