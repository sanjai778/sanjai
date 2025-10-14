import { CategoryService } from "@/service/CategoryService";
import { NextResponse } from "next/server";

export class CategoryController {
  private categoryService: CategoryService;

  constructor() {
    this.categoryService = new CategoryService();
  }

  async getAll() {
    try {
      const categories = await this.categoryService.getAll();
      return NextResponse.json(categories);
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: "Failed to fetch categories" }),
        { status: 500 }
      );
    }
  }

  async getById(id: number) {
    try {
      const category = await this.categoryService.getById(id);
      if (!category) {
        return new NextResponse(JSON.stringify({ error: "Category not found" }), {
          status: 404,
        });
      }
      return NextResponse.json(category);
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: "Failed to fetch category" }),
        { status: 500 }
      );
    }
  }

  async create(request: Request) {
    try {
      const body = await request.json();
      const newCategory = await this.categoryService.create(body);
      return new NextResponse(JSON.stringify(newCategory), { status: 201 });
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: "Failed to create category" }),
        { status: 500 }
      );
    }
  }

  async update(id: number, request: Request) {
    try {
      const body = await request.json();
      const updatedCategory = await this.categoryService.update(id, body);
      return NextResponse.json(updatedCategory);
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: "Failed to update category" }),
        { status: 500 }
      );
    }
  }

  async delete(id: number) {
    try {
      await this.categoryService.delete(id);
      return new NextResponse(null, { status: 204 });
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: "Failed to delete category" }),
        { status: 500 }
      );
    }
  }
}
