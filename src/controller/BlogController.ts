import { BlogService } from "@/service/BlogService";
import { NextResponse } from "next/server";

export class BlogController {
  private blogService: BlogService;

  constructor() {
    this.blogService = new BlogService();
  }

  async getAll() {
    try {
      const blogs = await this.blogService.getAll();
      return NextResponse.json(blogs);
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: "Failed to fetch blogs" }),
        { status: 500 }
      );
    }
  }

  async getById(id: number) {
    try {
      const blog = await this.blogService.getById(id);
      if (!blog) {
        return new NextResponse(JSON.stringify({ error: "Blog not found" }), {
          status: 404,
        });
      }
      return NextResponse.json(blog);
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: "Failed to fetch blog" }),
        { status: 500 }
      );
    }
  }

  async create(request: Request) {
    try {
      const body = await request.json();
      const newBlog = await this.blogService.create(body);
      return new NextResponse(JSON.stringify(newBlog), { status: 201 });
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: "Failed to create blog" }),
        { status: 500 }
      );
    }
  }

  async update(id: number, request: Request) {
    try {
      const body = await request.json();
      const updatedBlog = await this.blogService.update(id, body);
      return NextResponse.json(updatedBlog);
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: "Failed to update blog" }),
        { status: 500 }
      );
    }
  }

  async delete(id: number) {
    try {
      await this.blogService.delete(id);
      return new NextResponse(null, { status: 204 });
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: "Failed to delete blog" }),
        { status: 500 }
      );
    }
  }
}
