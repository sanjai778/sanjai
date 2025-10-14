import { getDBConnection } from "../lib/db";
import { Compare } from "../entity/Compare";

export const getCompareRepository = async () => {
  try {
    const connection = await getDBConnection();
    return connection.getRepository(Compare);
  } catch (error) {
    console.error("Error getting compare repository:", error);
    throw error;
  }
};
