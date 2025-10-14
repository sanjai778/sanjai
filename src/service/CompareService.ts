import { getCompareRepository } from "../repository/CompareRepository";
import { Compare } from "../entity/Compare";

export class CompareService {
  public async getAllCompares(): Promise<Compare[]> {
    try {
      const compareRepository = await getCompareRepository();
      return compareRepository.find();
    } catch (error) {
      console.error("Error getting all compares:", error);
      throw error;
    }
  }

  public async getCompareById(id: string): Promise<Compare | null> {
    try {
      const compareRepository = await getCompareRepository();
      return compareRepository.findOne({ where: { Id: id } });
    } catch (error) {
      console.error(`Error getting compare by id ${id}:`, error);
      throw error;
    }
  }

  public async createCompare(compareData: Partial<Compare>): Promise<Compare> {
    try {
      const compareRepository = await getCompareRepository();
      const newCompare = compareRepository.create(compareData);
      return compareRepository.save(newCompare);
    } catch (error) {
      console.error("Error creating compare:", error);
      throw error;
    }
  }

  public async updateCompare(id: string, compareData: Partial<Compare>): Promise<Compare | null> {
    try {
      const compareRepository = await getCompareRepository();
      const compare = await compareRepository.findOne({ where: { Id: id } });
      if (compare) {
        compareRepository.merge(compare, compareData);
        return compareRepository.save(compare);
      }
      return null;
    } catch (error) {
      console.error(`Error updating compare with id ${id}:`, error);
      throw error;
    }
  }

  public async deleteCompare(id: string): Promise<boolean> {
    try {
      const compareRepository = await getCompareRepository();
      const deleteResult = await compareRepository.delete(id);
      return deleteResult.affected === 1;
    } catch (error) {
      console.error(`Error deleting compare with id ${id}:`, error);
      throw error;
    }
  }
}
