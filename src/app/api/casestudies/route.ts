import { CaseStudyController } from "@/controller/CaseStudyController";
import { NextRequest } from "next/server";

const caseStudyController = new CaseStudyController();

export async function GET(req: NextRequest) {
  console.log("Fetching all casestudies");
  return caseStudyController.getAllCaseStudies(req);
}

export async function POST(req: NextRequest) {
  console.log("Creating a new casestudy");
  return caseStudyController.createCaseStudy(req);
}
