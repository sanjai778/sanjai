import { NextResponse } from 'next/server';
import { BlogService } from '../../../../src/service/BlogService';

export async function GET() {
  try {
    const blogService = new BlogService();
    const blogs = await blogService.getAll();
    
    if (!blogs || blogs.length === 0) {
      return NextResponse.json({ message: "No blogs found" }, { status: 404 });
    }
    
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
