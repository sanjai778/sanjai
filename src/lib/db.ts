import { DataSource } from "typeorm";
import options from "../../ormconfig";

const dataSource = new DataSource(options[0]);

export async function getDBConnection() {
  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }
  return dataSource;
}
