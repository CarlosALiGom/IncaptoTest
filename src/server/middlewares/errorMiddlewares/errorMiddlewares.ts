import createDebug from "debug";
import CustomError from "../../../CustomError/CustomError.js";
import {
  responseMessage,
  responseStatusCode,
} from "../../utils/responseData/responseData.js";
import { type NextFunction, type Request, type Response } from "express";

const debugError = createDebug(
  "incaptoTest-api:server:middleWares:errorMiddlewares",
);

export const notFoundError = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const error = new CustomError(
    responseStatusCode.notFound,
    responseMessage.notFound,
  );

  next(error);
};

export const generalError = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  debugError(error.message);

  const statusCode = error.statusCode || responseStatusCode.internalServerError;

  const message = error.statusCode
    ? error.message
    : responseMessage.internalServerError;

  res.status(statusCode).json({ message });
};
