import { getCaseStudyRepository } from "../repository/CaseStudyRepository";
import { CaseStudy } from "../entity/CaseStudy";

export class CaseStudyService {
  public async getAllCaseStudies(): Promise<CaseStudy[]> {
    const caseStudyRepository = await getCaseStudyRepository();
    return caseStudyRepository.find();
  }

  public async getCaseStudyById(id: string): Promise<CaseStudy | null> {
    const caseStudyRepository = await getCaseStudyRepository();
    return caseStudyRepository.findOne({ where: { Id: id } });
  }

  public async createCaseStudy(caseStudyData: Partial<CaseStudy>): Promise<CaseStudy> {
    const caseStudyRepository = await getCaseStudyRepository();
    const newCaseStudy = caseStudyRepository.create(caseStudyData);
    return caseStudyRepository.save(newCaseStudy);
  }

  public async updateCaseStudy(id: string, caseStudyData: Partial<CaseStudy>): Promise<CaseStudy | null> {
    const caseStudyRepository = await getCaseStudyRepository();
    const caseStudy = await caseStudyRepository.findOne({ where: { Id: id } });
    if (caseStudy) {
      caseStudyRepository.merge(caseStudy, caseStudyData);
      return caseStudyRepository.save(caseStudy);
    }
    return null;
  }

  public async deleteCaseStudy(id: string): Promise<boolean> {
    const caseStudyRepository = await getCaseStudyRepository();
    const deleteResult = await caseStudyRepository.delete(id);
    return deleteResult.affected === 1;
  }
}
