


const dbConfig = {
	DB_DATABASE: process.env.DB_DATABASE ?? "",
  DB_USER: process.env.DB_USER ?? "",
	DB_PASSWORD: process.env.DB_PASSWORD ?? "",
	DB_PORT: Number(process.env.DB_PORT) ?? 3306,
};


export default dbConfig;
