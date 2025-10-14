import { CountryWorkplaceDataController } from "../../../../controller/CountryWorkplaceDataController";
import { NextRequest } from "next/server";

const countryWorkplaceDataController = new CountryWorkplaceDataController();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  console.log(`Fetching country workplace data with id: ${params.id}`);
  return countryWorkplaceDataController.getCountryWorkplaceDataById(req, { params });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  console.log(`Updating country workplace data with id: ${params.id}`);
  return countryWorkplaceDataController.updateCountryWorkplaceData(req, { params });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  console.log(`Deleting country workplace data with id: ${params.id}`);
  return countryWorkplaceDataController.deleteCountryWorkplaceData(req, { params });
}
