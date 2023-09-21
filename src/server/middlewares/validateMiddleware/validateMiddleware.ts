import createDebug from "debug";
import { type NextFunction, type Response } from "express";
import { type CustomRequest } from "../../types";

const debug = createDebug(
  "incaptoTest-api:servermiddleWares:validateMiddleware",
);

const validate = (req: CustomRequest, res: Response, next: NextFunction) => {
  const allowedChars = /^[LRM]+$/i;

  const { body } = req;

  if (!body.commands || !allowedChars.test(req.body.commands)) {
    debug("Invalid request format");
    return res.status(400).json({
      error:
        "Body request must contain a commands property with a string chain with only 'L', 'R' and 'M' characters",
    });
  }

  next();
};

export default validate;
