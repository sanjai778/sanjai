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
      const categoriesToSend = categories.map((category) => ({
        id: category.id,
        name: category.name,
      }));
      return NextResponse.json(categoriesToSend);
    } catch (error) {
      console.error("Error fetching categories:", error);
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
      console.error(`Error fetching category with id ${id}:`, error);
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
      console.error("Error creating category:", error);
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
      console.error(`Error updating category with id ${id}:`, error);
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
      console.error(`Error deleting category with id ${id}:`, error);
      return new NextResponse(
        JSON.stringify({ error: "Failed to delete category" }),
        { status: 500 }
      );
    }
  }
}
