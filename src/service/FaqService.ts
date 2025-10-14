import { getFaqRepository } from "../repository/FaqRepository";
import { Faq } from "../entity/Faq";

export class FaqService {
  public async getAllFaqs(): Promise<Faq[]> {
    try {
      const faqRepository = await getFaqRepository();
      return faqRepository.find();
    } catch (error) {
      console.error("Error getting all faqs:", error);
      throw error;
    }
  }

  public async getFaqById(id: string): Promise<Faq | null> {
    try {
      const faqRepository = await getFaqRepository();
      return faqRepository.findOne({ where: { id: id } });
    } catch (error) {
      console.error(`Error getting faq by id ${id}:`, error);
      throw error;
    }
  }

  public async createFaq(faqData: Partial<Faq>): Promise<Faq> {
    try {
      const faqRepository = await getFaqRepository();
      const newFaq = faqRepository.create(faqData);
      return faqRepository.save(newFaq);
    } catch (error) {
      console.error("Error creating faq:", error);
      throw error;
    }
  }

  public async updateFaq(id: string, faqData: Partial<Faq>): Promise<Faq | null> {
    try {
      const faqRepository = await getFaqRepository();
      const faq = await faqRepository.findOne({ where: { id: id } });
      if (faq) {
        faqRepository.merge(faq, faqData);
        return faqRepository.save(faq);
      }
      return null;
    } catch (error) {
      console.error(`Error updating faq with id ${id}:`, error);
      throw error;
    }
  }

  public async deleteFaq(id: string): Promise<boolean> {
    try {
      const faqRepository = await getFaqRepository();
      const deleteResult = await faqRepository.delete(id);
      return deleteResult.affected === 1;
    } catch (error) {
      console.error(`Error deleting faq with id ${id}:`, error);
      throw error;
    }
  }
}
