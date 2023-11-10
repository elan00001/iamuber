import logger from "../utils/logger";
import { Request, Response, NextFunction } from "express";
import errorHandler from "./errorHandler";

jest.mock("../utils/logger", () => ({
	error: jest.fn(),
}));

describe("errorHandler middleware", () => {
  it("should log the error and send a 500 response", () => {
    const error = new Error("Test error message");

    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;
    const next = jest.fn() as NextFunction;

    errorHandler(error, req, res, next);

    expect(logger.error).toHaveBeenCalledWith("Test error message");

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith("Test error message");

    expect(next).not.toHaveBeenCalled();
  });
});