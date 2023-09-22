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

  const finalRobotState = robotMapping(initialRobotState(), commands);

  const output = `${finalRobotState.position.x}|${finalRobotState.position.y}|${finalRobotState.orientation}`;

  res.status(responseStatusCode.ok).json({ output });
};

export default robotController;
