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
      // Manually map to avoid circular references and to select only the required fields
      const blogsToSend = blogs.map((blog) => ({
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        date: blog.date,
        image: blog.featuredImage,
        categories: blog.categories.map((category) => ({
          id: category.id,
          name: category.name,
        })),
      }));
      return NextResponse.json(blogsToSend);
    } catch (error) {
      console.error("Error fetching blogs:", error);
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
      console.error(`Error fetching blog with id ${id}:`, error);
      return new NextResponse(
        JSON.stringify({ error: "Failed to fetch blog" }),
        { status: 500 }
      );
    }
  }

  async getBySlug(slug: string) {
    try {
      const blog = await this.blogService.getBySlug(slug);
      if (!blog) {
        return new NextResponse(JSON.stringify({ error: "Blog not found" }), {
          status: 404,
        });
      }
      return NextResponse.json(blog);
    } catch (error) {
      console.error(`Error fetching blog with slug ${slug}:`, error);
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
      console.error("Error creating blog:", error);
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
      console.error(`Error updating blog with id ${id}:`, error);
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
      console.error(`Error deleting blog with id ${id}:`, error);
      return new NextResponse(
        JSON.stringify({ error: "Failed to delete blog" }),
        { status: 500 }
      );
    }
  }

  async getLimitedBlogs(req: Request) {
    try {
      const blogs = await this.blogService.getLimitedBlogs();
      return NextResponse.json(blogs);
    } catch (error) {
      console.error("Error fetching limited blogs:", error);
      return new NextResponse(
        JSON.stringify({ error: "Failed to fetch limited blogs" }),
        { status: 500 }
      );
    }
  }
}
