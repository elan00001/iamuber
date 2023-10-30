import { DataSource } from "typeorm"
import { dbConfig } from "../config";

export default function createConnection(): {} {
	const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: dbConfig.DB_PORT,
    username: dbConfig.DB_USER,
    password: dbConfig.DB_PASSWORD,
		database: dbConfig.DB_DATABASE,
	});

	dataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    });

	return dataSource;
}
