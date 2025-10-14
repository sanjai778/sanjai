import { CountryWorkplaceDataService } from "../service/CountryWorkplaceDataService";
import { NextRequest, NextResponse } from "next/server";

export class CountryWorkplaceDataController {
  private countryWorkplaceDataService: CountryWorkplaceDataService;

  constructor() {
    this.countryWorkplaceDataService = new CountryWorkplaceDataService();
  }

  public async getAllCountryWorkplaceData(req: NextRequest) {
    try {
      const countryWorkplaceData = await this.countryWorkplaceDataService.getAllCountryWorkplaceData();
      return NextResponse.json(countryWorkplaceData);
    } catch (error) {
      console.error("Error fetching country workplace data:", error);
      return NextResponse.json({ error: 'Failed to fetch country workplace data' }, { status: 500 });
    }
  }

  public async getCountryWorkplaceDataById(req: NextRequest, { params }: { params: { id: string } }) {
    try {
      const id = parseInt(params.id, 10);
      const countryWorkplaceData = await this.countryWorkplaceDataService.getCountryWorkplaceDataById(id);
      if (countryWorkplaceData) {
        return NextResponse.json(countryWorkplaceData);
      } else {
        return NextResponse.json({ error: 'Country workplace data not found' }, { status: 404 });
      }
    } catch (error) {
      console.error(`Error fetching country workplace data with id ${params.id}:`, error);
      return NextResponse.json({ error: 'Failed to fetch country workplace data' }, { status: 500 });
    }
  }

  public async createCountryWorkplaceData(req: NextRequest) {
    try {
      const body = await req.json();
      const newCountryWorkplaceData = await this.countryWorkplaceDataService.createCountryWorkplaceData(body);
      return NextResponse.json(newCountryWorkplaceData, { status: 201 });
    } catch (error) {
      console.error("Error creating country workplace data:", error);
      return NextResponse.json({ error: 'Failed to create country workplace data' }, { status: 500 });
    }
  }

  public async updateCountryWorkplaceData(req: NextRequest, { params }: { params: { id: string } }) {
    try {
      const id = parseInt(params.id, 10);
      const body = await req.json();
      const updatedCountryWorkplaceData = await this.countryWorkplaceDataService.updateCountryWorkplaceData(id, body);
      if (updatedCountryWorkplaceData) {
        return NextResponse.json(updatedCountryWorkplaceData);
      } else {
        return NextResponse.json({ error: 'Country workplace data not found' }, { status: 404 });
      }
    } catch (error) {
      console.error(`Error updating country workplace data with id ${params.id}:`, error);
      return NextResponse.json({ error: 'Failed to update country workplace data' }, { status: 500 });
    }
  }

  public async deleteCountryWorkplaceData(req: NextRequest, { params }: { params: { id: string } }) {
    try {
      const id = parseInt(params.id, 10);
      const success = await this.countryWorkplaceDataService.deleteCountryWorkplaceData(id);
      if (success) {
        return NextResponse.json({ message: 'Country workplace data deleted successfully' });
      } else {
        return NextResponse.json({ error: 'Country workplace data not found' }, { status: 404 });
      }
    } catch (error) {
      console.error(`Error deleting country workplace data with id ${params.id}:`, error);
      return NextResponse.json({ error: 'Failed to delete country workplace data' }, { status: 500 });
    }
  }
}
