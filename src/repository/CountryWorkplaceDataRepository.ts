import { getDBConnection } from "../lib/db";
import { CountryWorkplaceData } from "../entity/CountryWorkplaceData";

export const getCountryWorkplaceDataRepository = async () => {
  const connection = await getDBConnection();
  return connection.getRepository(CountryWorkplaceData);
};
