import createDebug from "debug";
import { type NextFunction, type Response } from "express";
import { type CustomRequest } from "../../types";
import {
  responseMessage,
  responseStatusCode,
} from "../../utils/responseData/responseData.js";

const debug = createDebug(
  "incaptoTest-api:server:middleWares:validateMiddleware",
);

const validate = (req: CustomRequest, res: Response, next: NextFunction) => {
  const allowedChars = /^[LRM]+$/i;

  const { body } = req;

  if (!body.commands || !allowedChars.test(body.commands)) {
    debug("Invalid request format");
    return res.status(responseStatusCode.badRequest).json({
      error: responseMessage.badRequest,
    });
  }

  next();
};

export default validate;
