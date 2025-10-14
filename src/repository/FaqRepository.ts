import { getDBConnection } from "../lib/db";
import { Faq } from "../entity/Faq";

export const getFaqRepository = async () => {
  try {
    const connection = await getDBConnection();
    return connection.getRepository(Faq);
  } catch (error) {
    console.error("Error getting faq repository:", error);
    throw error;
  }
};
