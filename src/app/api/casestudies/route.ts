import { CaseStudyController } from "../../../controller/CaseStudyController";
import { NextRequest } from "next/server";

const caseStudyController = new CaseStudyController();

export async function GET(req: NextRequest) {
  return caseStudyController.getAllCaseStudies(req);
}

export async function POST(req: NextRequest) {
  return caseStudyController.createCaseStudy(req);
}
