import { CompareController } from "../../../controller/CompareController";
import { NextRequest } from "next/server";

const compareController = new CompareController();

export async function GET(req: NextRequest) {
  return compareController.getAllCompares(req);
}

export async function POST(req: NextRequest) {
  return compareController.createCompare(req);
}
