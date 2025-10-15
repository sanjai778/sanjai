import { CompareController } from "@/controller/CompareController";
import { NextRequest } from "next/server";

const compareController = new CompareController();

export async function GET(req: NextRequest) {
  console.log("Fetching all compares");
  return compareController.getAllCompares(req);
}

export async function POST(req: NextRequest) {
  console.log("Creating a new compare");
  return compareController.createCompare(req);
}
