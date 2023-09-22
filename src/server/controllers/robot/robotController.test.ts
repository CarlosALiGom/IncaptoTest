import { type NextFunction, type Request, type Response } from "express";
import { type CustomRequest } from "../../types";
import robotController from "./robotController";
import { responseStatusCode } from "../../utils/responseData/responseData";

describe("Given a robotController controller", () => {
  describe("When it receives a req with a string 'MMMMLMMRMM'", () => {
    test("Then it should response with the status method and the json method with an output pointing a string '8|6|N'", () => {
      const next: NextFunction = jest.fn();

      const req: Partial<CustomRequest> = {
        body: {
          commands: "MMMMLMMRMMMMMMRMRMRM",
        },
      };

      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const expectedOutput = "8|9|W";

      robotController(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(responseStatusCode.ok);
      expect(res.json).toHaveBeenCalledWith({ output: expectedOutput });
    });
  });
});
