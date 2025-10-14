import { getDBConnection } from "../lib/db";
import { CaseStudy } from "../entity/CaseStudy";

export const getCaseStudyRepository = async () => {
  const connection = await getDBConnection();
  return connection.getRepository(CaseStudy);
};
