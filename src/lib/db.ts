import { DataSource } from "typeorm";
import "reflect-metadata";
import options from "../../ormconfig";

const AppDataSource = new DataSource(options[1]); // Using the "new_db" connection

export const getDBConnection = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
  return AppDataSource;
};
