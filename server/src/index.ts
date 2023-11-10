import { config } from "./config";
import "reflect-metadata";
import logger from "./utils/logger";
import createServer from "./utils/createServer";
import { createConnection } from "./utils/createConnection";
import errorHandler from "./middlewares/errorHandler";

Promise.all([createConnection()]).then(() => {
  const app = createServer();
  app.use(errorHandler);
  app.listen(config.PORT, () => {
    logger.info(`Server is listening on port ${config.PORT}`);
  });
});
