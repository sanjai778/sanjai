import { CountryWorkplaceDataController } from "../../../../controller/CountryWorkplaceDataController";
import { NextRequest } from "next/server";

const countryWorkplaceDataController = new CountryWorkplaceDataController();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  return countryWorkplaceDataController.getCountryWorkplaceDataById(req, { params });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  return countryWorkplaceDataController.updateCountryWorkplaceData(req, { params });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  return countryWorkplaceDataController.deleteCountryWorkplaceData(req, { params });
}
