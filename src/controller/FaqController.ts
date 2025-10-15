import { FaqService } from "@/service/FaqService";
import { NextRequest, NextResponse } from "next/server";

export class FaqController {
  private faqService: FaqService;

  constructor() {
    this.faqService = new FaqService();
  }

  public async getAllFaqs(req: NextRequest) {
    try {
      const faqs = await this.faqService.getAllFaqs();
      return NextResponse.json(faqs);
    } catch (error) {
      console.error("Error fetching faqs:", error);
      return NextResponse.json({ error: 'Failed to fetch faqs' }, { status: 500 });
    }
  }

  public async getFaqById(req: NextRequest, { params }: { params: { id: string } }) {
    try {
      const id = params.id;
      const faq = await this.faqService.getFaqById(id);
      if (faq) {
        return NextResponse.json(faq);
      } else {
        return NextResponse.json({ error: 'Faq not found' }, { status: 404 });
      }
    } catch (error) {
      console.error(`Error fetching faq with id ${params.id}:`, error);
      return NextResponse.json({ error: 'Failed to fetch faq' }, { status: 500 });
    }
  }

  public async createFaq(req: NextRequest) {
    try {
      const body = await req.json();
      const newFaq = await this.faqService.createFaq(body);
      return NextResponse.json(newFaq, { status: 201 });
    } catch (error) {
      console.error("Error creating faq:", error);
      return NextResponse.json({ error: 'Failed to create faq' }, { status: 500 });
    }
  }

  public async updateFaq(req: NextRequest, { params }: { params: { id: string } }) {
    try {
      const id = params.id;
      const body = await req.json();
      const updatedFaq = await this.faqService.updateFaq(id, body);
      if (updatedFaq) {
        return NextResponse.json(updatedFaq);
      } else {
        return NextResponse.json({ error: 'Faq not found' }, { status: 404 });
      }
    } catch (error) {
      console.error(`Error updating faq with id ${params.id}:`, error);
      return NextResponse.json({ error: 'Failed to update faq' }, { status: 500 });
    }
  }

  public async deleteFaq(req: NextRequest, { params }: { params: { id: string } }) {
    try {
      const id = params.id;
      const success = await this.faqService.deleteFaq(id);
      if (success) {
        return NextResponse.json({ message: 'Faq deleted successfully' });
      } else {
        return NextResponse.json({ error: 'Faq not found' }, { status: 404 });
      }
    } catch (error) {
      console.error(`Error deleting faq with id ${params.id}:`, error);
      return NextResponse.json({ error: 'Failed to delete faq' }, { status: 500 });
    }
  }
}
