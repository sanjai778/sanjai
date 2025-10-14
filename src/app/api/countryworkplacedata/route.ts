import { CountryWorkplaceDataController } from "../../../controller/CountryWorkplaceDataController";
import { NextRequest } from "next/server";

const countryWorkplaceDataController = new CountryWorkplaceDataController();

export async function GET(req: NextRequest) {
  return countryWorkplaceDataController.getAllCountryWorkplaceData(req);
}

export async function POST(req: NextRequest) {
  return countryWorkplaceDataController.createCountryWorkplaceData(req);
}
