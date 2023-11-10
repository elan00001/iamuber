import HttpError from "../utils/HttpError";
import logger from "../utils/logger";
import type { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next): void => {
	if (err instanceof HttpError) res.status(err.statusCode).send(err.message);
	else res.status(500).send(err.message);
	logger.error(err.message);
}

export default errorHandler;
