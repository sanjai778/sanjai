import { CompareController } from "../../../../controller/CompareController";
import { NextRequest } from "next/server";

const compareController = new CompareController();

export async function GET(req: NextRequest) {
  return compareController.getLimitedCompares(req);
}
