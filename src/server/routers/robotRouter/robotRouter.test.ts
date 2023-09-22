import request from "supertest";
import app from "../../app.js";
import {
  responseMessage,
  responseStatusCode,
} from "../../utils/responseData/responseData";

describe("Given a POST '/robot' endpoint", () => {
  describe("When it receives a request with a valid body format", () => {
    test("Then it should reply with a 200 status and a response body with a property named output", async () => {
      const expectedSendedBody = {
        commands: "LMRMRLRM",
      };

      const response = await request(app)
        .post("/robot")
        .send(expectedSendedBody)
        .expect(responseStatusCode.ok);

      expect(response.body).toHaveProperty("output");
    });
  });

  describe("When it receives a request with an invalid body format", () => {
    test("Then it should reply with a 400 status and a response body with a property named output", async () => {
      const expectedMessage = responseMessage.badRequest;

      const response = await request(app)
        .post("/robot")
        .expect(responseStatusCode.badRequest);

      expect(response.body.error).toBe(expectedMessage);
    });
  });
});
