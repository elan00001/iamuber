import logger from "../utils/logger";
import type { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next): void => {
	logger.error(err.message);
	res.status(500).send(err.message);
}

export default errorHandler;
