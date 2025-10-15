import { getCountryWorkplaceDataRepository } from "@/repository/CountryWorkplaceDataRepository";
import { CountryWorkplaceData } from "@/entity/CountryWorkplaceData";

export class CountryWorkplaceDataService {
  public async getAllCountryWorkplaceData(): Promise<CountryWorkplaceData[]> {
    try {
      const countryWorkplaceDataRepository = await getCountryWorkplaceDataRepository();
      return countryWorkplaceDataRepository.find();
    } catch (error) {
      console.error("Error getting all country workplace data:", error);
      throw error;
    }
  }

  public async getCountryWorkplaceDataById(id: number): Promise<CountryWorkplaceData | null> {
    try {
      const countryWorkplaceDataRepository = await getCountryWorkplaceDataRepository();
      return countryWorkplaceDataRepository.findOne({ where: { id: id } });
    } catch (error) {
      console.error(`Error getting country workplace data by id ${id}:`, error);
      throw error;
    }
  }

  public async createCountryWorkplaceData(countryWorkplaceDataData: Partial<CountryWorkplaceData>): Promise<CountryWorkplaceData> {
    try {
      const countryWorkplaceDataRepository = await getCountryWorkplaceDataRepository();
      const newCountryWorkplaceData = countryWorkplaceDataRepository.create(countryWorkplaceDataData);
      return countryWorkplaceDataRepository.save(newCountryWorkplaceData);
    } catch (error) {
      console.error("Error creating country workplace data:", error);
      throw error;
    }
  }

  public async updateCountryWorkplaceData(id: number, countryWorkplaceDataData: Partial<CountryWorkplaceData>): Promise<CountryWorkplaceData | null> {
    try {
      const countryWorkplaceDataRepository = await getCountryWorkplaceDataRepository();
      const countryWorkplaceData = await countryWorkplaceDataRepository.findOne({ where: { id: id } });
      if (countryWorkplaceData) {
        countryWorkplaceDataRepository.merge(countryWorkplaceData, countryWorkplaceDataData);
        return countryWorkplaceDataRepository.save(countryWorkplaceData);
      }
      return null;
    } catch (error) {
      console.error(`Error updating country workplace data with id ${id}:`, error);
      throw error;
    }
  }

  public async deleteCountryWorkplaceData(id: number): Promise<boolean> {
    try {
      const countryWorkplaceDataRepository = await getCountryWorkplaceDataRepository();
      const deleteResult = await countryWorkplaceDataRepository.delete(id);
      return deleteResult.affected === 1;
    } catch (error) {
      console.error(`Error deleting country workplace data with id ${id}:`, error);
      throw error;
    }
  }
}
