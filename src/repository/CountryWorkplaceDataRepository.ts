import { getDBConnection } from "../lib/db";
import { CountryWorkplaceData } from "../entity/CountryWorkplaceData";

export const getCountryWorkplaceDataRepository = async () => {
  try {
    const connection = await getDBConnection();
    return connection.getRepository(CountryWorkplaceData);
  } catch (error) {
    console.error("Error getting country workplace data repository:", error);
    throw error;
  }
};
