import { getDBConnection } from "../lib/db";
import { Compare } from "../entity/Compare";

export const getCompareRepository = async () => {
  const connection = await getDBConnection();
  return connection.getRepository(Compare);
};
