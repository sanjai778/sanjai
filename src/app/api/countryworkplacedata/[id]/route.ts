import { CountryWorkplaceDataController } from "../../../../controller/CountryWorkplaceDataController";
import { NextRequest, NextResponse } from "next/server";

const countryWorkplaceDataController = new CountryWorkplaceDataController();

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  console.log(`Fetching country workplace data with id: ${id}`);
  return countryWorkplaceDataController.getCountryWorkplaceDataById(req, {
    params: { id },
  });
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  console.log(`Updating country workplace data with id: ${id}`);
  return countryWorkplaceDataController.updateCountryWorkplaceData(req, {
    params: { id },
  });
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  console.log(`Deleting country workplace data with id: ${id}`);
  return countryWorkplaceDataController.deleteCountryWorkplaceData(req, {
    params: { id },
  });
}
