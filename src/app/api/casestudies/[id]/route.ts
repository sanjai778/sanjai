import { CaseStudyController } from "../../../../controller/CaseStudyController";
import { NextRequest, NextResponse } from "next/server";

const caseStudyController = new CaseStudyController();

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  console.log(`Fetching case study with id: ${id}`);
  return caseStudyController.getCaseStudyById(req, { params: { id } });
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  console.log(`Updating case study with id: ${id}`);
  return caseStudyController.updateCaseStudy(req, { params: { id } });
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  console.log(`Deleting case study with id: ${id}`);
  return caseStudyController.deleteCaseStudy(req, { params: { id } });
}
