import winston, { createLogger, format } from "winston";
import { config } from "../config";

// ways to output logs, base on the environment
const transports =
  config.ENV === "production"
    ? [
        new winston.transports.File({
          filename: "error.log",
          level: "error",
        }),
        new winston.transports.File({ filename: "combined.log" }),
      ]
    : [
        new winston.transports.Console({
          format: format.combine(format.simple(), format.colorize()),
        }),
      ];

const logger = winston.createLogger({
  level: config.LOG_LEVEL,
  transports,
});

export default logger;
