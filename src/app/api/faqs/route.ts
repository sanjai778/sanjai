import { FaqController } from "../../../controller/FaqController";
import { NextRequest } from "next/server";

const faqController = new FaqController();

export async function GET(req: NextRequest) {
  console.log("Fetching all FAQs");
  return faqController.getAllFaqs(req);
}

export async function POST(req: NextRequest) {
  console.log("Creating a new FAQ");
  return faqController.createFaq(req);
}
