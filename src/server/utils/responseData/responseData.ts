import {
  type ResponseMessageStructure,
  type ResponseStatusCodeStructure,
} from "../types/responseDataTypes";


//[FEEDBACK](correcto): Me gusta que hayas implementado tipos de dato para las respuestas.
export const responseStatusCode: ResponseStatusCodeStructure = {
  ok: 200,
  badRequest: 400,
  notFound: 404,
  internalServerError: 500,
};

export const responseMessage: ResponseMessageStructure = {
  ok: "OK",
  badRequest:
    "Body request must contain a commands property with a string chain with only 'L', 'R' and 'M' characters",
  notFound: "Not found",
  internalServerError: "Internal Server Error",
};
