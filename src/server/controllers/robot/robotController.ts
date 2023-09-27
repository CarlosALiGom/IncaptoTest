import { type NextFunction, type Response } from "express";
import { type CustomRequest } from "../../types";
import { responseStatusCode } from "../../utils/responseData/responseData.js";
import {
  initialRobotState,
  robotMapping,
} from "../../utils/robotTools/robotTools.js";

const robotController = (
  req: CustomRequest,
  res: Response,
  _next: NextFunction,
) => {
  const { commands } = req.body;

  //[FEEDBACK](mejora): Una mejor implementación habría sido definir un servicio que se encargara de mover el robot con un nombre descriptivo
  // no tiene mucho sentido mandar la incialización del robot como parametro en el controlador.
  const finalRobotState = robotMapping(initialRobotState(), commands);

  const output = `${finalRobotState.position.x}|${finalRobotState.position.y}|${finalRobotState.orientation}`;

  res.status(responseStatusCode.ok).json({ output });
};

export default robotController;
