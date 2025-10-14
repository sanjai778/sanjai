import { CaseStudyService } from "../service/CaseStudyService";
import { NextRequest, NextResponse } from "next/server";

export class CaseStudyController {
  private caseStudyService: CaseStudyService;

  constructor() {
    this.caseStudyService = new CaseStudyService();
  }

  public async getAllCaseStudies(req: NextRequest) {
    try {
      const caseStudies = await this.caseStudyService.getAllCaseStudies();
      return NextResponse.json(caseStudies);
    } catch (error) {
      console.error("Error fetching case studies:", error);
      return NextResponse.json({ error: 'Failed to fetch case studies' }, { status: 500 });
    }
  }

  public async getCaseStudyById(req: NextRequest, { params }: { params: { id: string } }) {
    try {
      const id = params.id;
      const caseStudy = await this.caseStudyService.getCaseStudyById(id);
      if (caseStudy) {
        return NextResponse.json(caseStudy);
      } else {
        return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
      }
    } catch (error) {
      console.error(`Error fetching case study with id ${params.id}:`, error);
      return NextResponse.json({ error: 'Failed to fetch case study' }, { status: 500 });
    }
  }

  public async createCaseStudy(req: NextRequest) {
    try {
      const body = await req.json();
      const newCaseStudy = await this.caseStudyService.createCaseStudy(body);
      return NextResponse.json(newCaseStudy, { status: 201 });
    } catch (error) {
      console.error("Error creating case study:", error);
      return NextResponse.json({ error: 'Failed to create case study' }, { status: 500 });
    }
  }

  public async updateCaseStudy(req: NextRequest, { params }: { params: { id: string } }) {
    try {
      const id = params.id;
      const body = await req.json();
      const updatedCaseStudy = await this.caseStudyService.updateCaseStudy(id, body);
      if (updatedCaseStudy) {
        return NextResponse.json(updatedCaseStudy);
      } else {
        return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
      }
    } catch (error) {
      console.error(`Error updating case study with id ${params.id}:`, error);
      return NextResponse.json({ error: 'Failed to update case study' }, { status: 500 });
    }
  }

  public async deleteCaseStudy(req: NextRequest, { params }: { params: { id: string } }) {
    try {
      const id = params.id;
      const success = await this.caseStudyService.deleteCaseStudy(id);
      if (success) {
        return NextResponse.json({ message: 'Case study deleted successfully' });
      } else {
        return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
      }
    } catch (error) {
      console.error(`Error deleting case study with id ${params.id}:`, error);
      return NextResponse.json({ error: 'Failed to delete case study' }, { status: 500 });
    }
  }
}
