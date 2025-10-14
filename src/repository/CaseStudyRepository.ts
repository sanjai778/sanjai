import { getDBConnection } from "../lib/db";
import { CaseStudy } from "../entity/CaseStudy";

export const getCaseStudyRepository = async () => {
  try {
    const connection = await getDBConnection();
    return connection.getRepository(CaseStudy);
  } catch (error) {
    console.error("Error getting case study repository:", error);
    throw error;
  }
};
