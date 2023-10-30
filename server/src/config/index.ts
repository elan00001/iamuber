import dotenv from "dotenv";

dotenv.config({ path: ".env" }); 
dotenv.config({ path: ".env.local" }); // the later config won't override the previous one

import config from "./app.config";
import dbConfig from "./db.config";

export  {
    config,
		dbConfig,
}
