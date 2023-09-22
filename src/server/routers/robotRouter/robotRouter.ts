import { Router } from "express";
import validate from "../../middlewares/validateMiddleware/validateMiddleware.js";
import robotController from "../../controllers/robot/robotController.js";

const robotRouter = Router();

robotRouter.post("/", validate, robotController);

export default robotRouter;
