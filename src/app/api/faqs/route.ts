import { NextResponse } from 'next/server';
import { FaqService } from '../../../../src/service/FaqService';

export async function GET() {
  try {
    const faqService = new FaqService();
    const faqs = await faqService.getAllFaqs();
    
    if (!faqs || faqs.length === 0) {
      return NextResponse.json({ message: "No FAQs found" }, { status: 404 });
    }
    
    return NextResponse.json(faqs);
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
