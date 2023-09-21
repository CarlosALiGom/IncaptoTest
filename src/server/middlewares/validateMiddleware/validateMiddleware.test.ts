import { type Response, type NextFunction } from "express";
import { type CustomRequest } from "../../types";
import validate from "./validateMiddleware";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a validate middleware", () => {
  const next: NextFunction = jest.fn();
  describe("When it receives a valid request", () => {
    test("Then it should call the next function", () => {
      const req: Partial<CustomRequest> = {
        body: {
          commands: "LRMLRMLRM",
        },
      };

      const res = {};

      validate(req as CustomRequest, res as Response, next);

      expect(next).toHaveBeenCalled();
    });
  });

  describe("When it receives and unvalid request", () => {
    test("Then it should call the request status method with a '400' and the json method with an error message", () => {
      const req: Partial<CustomRequest> = {
        body: {
          commands: "LRM55555",
        },
      };

      const expectedErrorStatus = 400;
      const expectedErrorMessage =
        "Body request must contain a commands property with a string chain with only 'L', 'R' and 'M' characters";

      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      validate(req as CustomRequest, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedErrorStatus);
      expect(res.json).toHaveBeenCalledWith({ error: expectedErrorMessage });
    });
  });
});
