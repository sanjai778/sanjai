import { FaqController } from "../../../controller/FaqController";
import { NextRequest } from "next/server";

const faqController = new FaqController();

export async function GET(req: NextRequest) {
  return faqController.getAllFaqs(req);
}

export async function POST(req: NextRequest) {
  return faqController.createFaq(req);
}
