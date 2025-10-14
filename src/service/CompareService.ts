import { getCompareRepository } from "../repository/CompareRepository";
import { Compare } from "../entity/Compare";

export class CompareService {
  public async getAllCompares(): Promise<Compare[]> {
    const compareRepository = await getCompareRepository();
    return compareRepository.find();
  }

  public async getCompareById(id: string): Promise<Compare | null> {
    const compareRepository = await getCompareRepository();
    return compareRepository.findOne({ where: { Id: id } });
  }

  public async createCompare(compareData: Partial<Compare>): Promise<Compare> {
    const compareRepository = await getCompareRepository();
    const newCompare = compareRepository.create(compareData);
    return compareRepository.save(newCompare);
  }

  public async updateCompare(id: string, compareData: Partial<Compare>): Promise<Compare | null> {
    const compareRepository = await getCompareRepository();
    const compare = await compareRepository.findOne({ where: { Id: id } });
    if (compare) {
      compareRepository.merge(compare, compareData);
      return compareRepository.save(compare);
    }
    return null;
  }

  public async deleteCompare(id: string): Promise<boolean> {
    const compareRepository = await getCompareRepository();
    const deleteResult = await compareRepository.delete(id);
    return deleteResult.affected === 1;
  }
}
