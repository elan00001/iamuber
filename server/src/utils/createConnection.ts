import { DataSource, EntityTarget, Repository, Entity, ObjectLiteral } from "typeorm";
import { dbConfig } from "../config";
import logger from "./logger";

const dataSource = new DataSource({
  type: "mysql",
  host: dbConfig.DB_HOST,
  port: dbConfig.DB_PORT,
  username: dbConfig.DB_USER,
  password: dbConfig.DB_PASSWORD,
  database: dbConfig.DB_DATABASE,
});


export default dataSource;
export async function createConnection() {
    try{
        await dataSource.initialize();
        logger.info("Data Source has been initialized!");
    } catch(err) {
        logger.error("Error during Data Source initialization", err);
    }
}
