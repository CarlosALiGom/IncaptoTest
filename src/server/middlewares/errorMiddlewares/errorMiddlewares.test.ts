import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../../CustomError/CustomError.js";
import {
  responseMessage,
  responseStatusCode,
} from "../../utils/responseData/responseData.js";
import { generalError, notFoundError } from "./errorMiddlewares.js";

beforeEach(() => {
  jest.clearAllMocks();
});

const next = jest.fn();
const req = {};

describe("Given a notFoundError errorMiddleware", () => {
  describe("When it receives a request and a next function", () => {
    test("Then it should call the next function with the error 'Endpoint not found'", () => {
      const res = {};
      const expectedError = new CustomError(
        responseStatusCode.notFound,
        responseMessage.notFound,
      );

      notFoundError(req as Request, res as Response, next as NextFunction);

      expect(next).toHaveBeenCalledWith(expectedError);
    });
  });
});

describe("Given a generalError errorMiddleware", () => {
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  describe("When it receives a request and an unknown error", () => {
    test("Then it should call the status method of the response with a 500 and the json method with an 'General Error' error message", () => {
      const error = new Error(responseMessage.internalServerError);
      const expectedStatusCode = responseStatusCode.internalServerError;
      const { message } = error;

      generalError(
        error as CustomError,
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(res.json).toHaveBeenCalledWith({ message });
    });
  });

  describe("When it receives a request and an error with status 404 and a error message 'Not found'", () => {
    test("Then it should call the status method of the response with a 404 status and the json method with 'Not found' error message", () => {
      const expectedStatusCode = responseStatusCode.notFound;
      const expectedErrorMessage = responseMessage.notFound;

      const customError = new CustomError(
        responseStatusCode.notFound,
        responseMessage.notFound,
      );

      generalError(
        customError,
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(res.json).toHaveBeenCalledWith({ message: expectedErrorMessage });
    });
  });
});
