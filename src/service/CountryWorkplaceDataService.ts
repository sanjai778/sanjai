import { getCountryWorkplaceDataRepository } from "../repository/CountryWorkplaceDataRepository";
import { CountryWorkplaceData } from "../entity/CountryWorkplaceData";

export class CountryWorkplaceDataService {
  public async getAllCountryWorkplaceData(): Promise<CountryWorkplaceData[]> {
    const countryWorkplaceDataRepository = await getCountryWorkplaceDataRepository();
    return countryWorkplaceDataRepository.find();
  }

  public async getCountryWorkplaceDataById(id: number): Promise<CountryWorkplaceData | null> {
    const countryWorkplaceDataRepository = await getCountryWorkplaceDataRepository();
    return countryWorkplaceDataRepository.findOne({ where: { id: id } });
  }

  public async createCountryWorkplaceData(countryWorkplaceDataData: Partial<CountryWorkplaceData>): Promise<CountryWorkplaceData> {
    const countryWorkplaceDataRepository = await getCountryWorkplaceDataRepository();
    const newCountryWorkplaceData = countryWorkplaceDataRepository.create(countryWorkplaceDataData);
    return countryWorkplaceDataRepository.save(newCountryWorkplaceData);
  }

  public async updateCountryWorkplaceData(id: number, countryWorkplaceDataData: Partial<CountryWorkplaceData>): Promise<CountryWorkplaceData | null> {
    const countryWorkplaceDataRepository = await getCountryWorkplaceDataRepository();
    const countryWorkplaceData = await countryWorkplaceDataRepository.findOne({ where: { id: id } });
    if (countryWorkplaceData) {
      countryWorkplaceDataRepository.merge(countryWorkplaceData, countryWorkplaceDataData);
      return countryWorkplaceDataRepository.save(countryWorkplaceData);
    }
    return null;
  }

  public async deleteCountryWorkplaceData(id: number): Promise<boolean> {
    const countryWorkplaceDataRepository = await getCountryWorkplaceDataRepository();
    const deleteResult = await countryWorkplaceDataRepository.delete(id);
    return deleteResult.affected === 1;
  }
}
