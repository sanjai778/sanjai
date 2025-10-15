import { getCaseStudyRepository } from "@/repository/CaseStudyRepository";
import { CaseStudy } from "@/entity/CaseStudy";

export class CaseStudyService {
  public async getAllCaseStudies(): Promise<CaseStudy[]> {
    try {
      const caseStudyRepository = await getCaseStudyRepository();
      return caseStudyRepository.find();
    } catch (error) {
      console.error("Error getting all case studies:", error);
      throw error;
    }
  }

  public async getCaseStudyById(id: string): Promise<CaseStudy | null> {
    try {
      const caseStudyRepository = await getCaseStudyRepository();
      return caseStudyRepository.findOne({ where: { Id: id } });
    } catch (error) {
      console.error(`Error getting case study by id ${id}:`, error);
      throw error;
    }
  }

  public async createCaseStudy(caseStudyData: Partial<CaseStudy>): Promise<CaseStudy> {
    try {
      const caseStudyRepository = await getCaseStudyRepository();
      const newCaseStudy = caseStudyRepository.create(caseStudyData);
      return caseStudyRepository.save(newCaseStudy);
    } catch (error) {
      console.error("Error creating case study:", error);
      throw error;
    }
  }

  public async updateCaseStudy(id: string, caseStudyData: Partial<CaseStudy>): Promise<CaseStudy | null> {
    try {
      const caseStudyRepository = await getCaseStudyRepository();
      const caseStudy = await caseStudyRepository.findOne({ where: { Id: id } });
      if (caseStudy) {
        caseStudyRepository.merge(caseStudy, caseStudyData);
        return caseStudyRepository.save(caseStudy);
      }
      return null;
    } catch (error) {
      console.error(`Error updating case study with id ${id}:`, error);
      throw error;
    }
  }

  public async deleteCaseStudy(id: string): Promise<boolean> {
    try {
      const caseStudyRepository = await getCaseStudyRepository();
      const deleteResult = await caseStudyRepository.delete(id);
      return deleteResult.affected === 1;
    } catch (error) {
      console.error(`Error deleting case study with id ${id}:`, error);
      throw error;
    }
  }
}
