import { DataSource } from "typeorm";
import "reflect-metadata";
import options from "../../ormconfig";

const AppDataSource = new DataSource(options[0]); // Using the "default" connection

export const getDBConnection = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
  return AppDataSource;
};
