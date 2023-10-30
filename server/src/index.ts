import { config } from "./config";
import "reflect-metadata";
import logger from "./utils/logger";
import createServer from "./utils/createServer";
import { createConnection } from "./utils/createConnection";

const app = createServer();

Promise.all([createConnection()]).then(() => {
  app.listen(config.PORT, () => {
    logger.info(`Server is listening on port ${config.PORT}`);
  });
});
