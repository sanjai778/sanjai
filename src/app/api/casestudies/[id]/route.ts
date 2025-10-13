import { CaseStudyController } from "../../../../controller/CaseStudyController";
import { NextRequest } from "next/server";

const caseStudyController = new CaseStudyController();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  return caseStudyController.getCaseStudyById(req, { params });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  return caseStudyController.updateCaseStudy(req, { params });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  return caseStudyController.deleteCaseStudy(req, { params });
}
