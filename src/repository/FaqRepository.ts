import { getDBConnection } from "../lib/db";
import { Faq } from "../entity/Faq";

export const getFaqRepository = async () => {
  const connection = await getDBConnection();
  return connection.getRepository(Faq);
};
