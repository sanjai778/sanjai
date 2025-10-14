import { CaseStudyController } from "../../../../controller/CaseStudyController";
import { NextRequest } from "next/server";

const caseStudyController = new CaseStudyController();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  console.log(`Fetching case study with id: ${params.id}`);
  return caseStudyController.getCaseStudyById(req, { params });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  console.log(`Updating case study with id: ${params.id}`);
  return caseStudyController.updateCaseStudy(req, { params });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  console.log(`Deleting case study with id: ${params.id}`);
  return caseStudyController.deleteCaseStudy(req, { params });
}
