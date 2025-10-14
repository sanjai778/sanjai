import { NextResponse } from 'next/server';
import { TestimonialService } from '../../../../src/service/TestimonialService';

export async function GET() {
  try {
    const testimonialService = new TestimonialService();
    const testimonials = await testimonialService.getAll();
    
    if (!testimonials || testimonials.length === 0) {
      return NextResponse.json({ message: "No testimonials found" }, { status: 404 });
    }
    
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
