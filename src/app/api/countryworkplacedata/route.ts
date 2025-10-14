import { CountryWorkplaceDataController } from "../../../controller/CountryWorkplaceDataController";
import { NextRequest } from "next/server";

const countryWorkplaceDataController = new CountryWorkplaceDataController();

export async function GET(req: NextRequest) {
  console.log("Fetching all country workplace data");
  return countryWorkplaceDataController.getAllCountryWorkplaceData(req);
}

export async function POST(req: NextRequest) {
  console.log("Creating new country workplace data");
  return countryWorkplaceDataController.createCountryWorkplaceData(req);
}
