import { CompareService } from "../service/CompareService";
import { NextRequest, NextResponse } from "next/server";

export class CompareController {
  private compareService: CompareService;

  constructor() {
    this.compareService = new CompareService();
  }

  public async getAllCompares(req: NextRequest) {
    try {
      const compares = await this.compareService.getAllCompares();
      return NextResponse.json(compares);
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch compares' }, { status: 500 });
    }
  }

  public async getCompareById(req: NextRequest, { params }: { params: { id: string } }) {
    try {
      const id = params.id;
      const compare = await this.compareService.getCompareById(id);
      if (compare) {
        return NextResponse.json(compare);
      } else {
        return NextResponse.json({ error: 'Compare not found' }, { status: 404 });
      }
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch compare' }, { status: 500 });
    }
  }

  public async createCompare(req: NextRequest) {
    try {
      const body = await req.json();
      const newCompare = await this.compareService.createCompare(body);
      return NextResponse.json(newCompare, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: 'Failed to create compare' }, { status: 500 });
    }
  }

  public async updateCompare(req: NextRequest, { params }: { params: { id: string } }) {
    try {
      const id = params.id;
      const body = await req.json();
      const updatedCompare = await this.compareService.updateCompare(id, body);
      if (updatedCompare) {
        return NextResponse.json(updatedCompare);
      } else {
        return NextResponse.json({ error: 'Compare not found' }, { status: 404 });
      }
    } catch (error) {
      return NextResponse.json({ error: 'Failed to update compare' }, { status: 500 });
    }
  }

  public async deleteCompare(req: NextRequest, { params }: { params: { id: string } }) {
    try {
      const id = params.id;
      const success = await this.compareService.deleteCompare(id);
      if (success) {
        return NextResponse.json({ message: 'Compare deleted successfully' });
      } else {
        return NextResponse.json({ error: 'Compare not found' }, { status: 404 });
      }
    } catch (error) {
      return NextResponse.json({ error: 'Failed to delete compare' }, { status: 500 });
    }
  }
}
