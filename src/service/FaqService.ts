import { getFaqRepository } from "../repository/FaqRepository";
import { Faq } from "../entity/Faq";

export class FaqService {
  public async getAllFaqs(): Promise<Faq[]> {
    const faqRepository = await getFaqRepository();
    return faqRepository.find();
  }

  public async getFaqById(id: string): Promise<Faq | null> {
    const faqRepository = await getFaqRepository();
    return faqRepository.findOne({ where: { id: id } });
  }

  public async createFaq(faqData: Partial<Faq>): Promise<Faq> {
    const faqRepository = await getFaqRepository();
    const newFaq = faqRepository.create(faqData);
    return faqRepository.save(newFaq);
  }

  public async updateFaq(id: string, faqData: Partial<Faq>): Promise<Faq | null> {
    const faqRepository = await getFaqRepository();
    const faq = await faqRepository.findOne({ where: { id: id } });
    if (faq) {
      faqRepository.merge(faq, faqData);
      return faqRepository.save(faq);
    }
    return null;
  }

  public async deleteFaq(id: string): Promise<boolean> {
    const faqRepository = await getFaqRepository();
    const deleteResult = await faqRepository.delete(id);
    return deleteResult.affected === 1;
  }
}
