import { Router } from "express";
import validate from "../../middlewares/validateMiddleware/validateMiddleware.js";
import robotController from "../../controllers/robot/robotController.js";

const robotRouter = Router();

//[FEEDBACK](error): No se ha planteado una estructura de endpoints que permita una facil escalabilidad y posterior versionado
// Ej: se debería definir una estructura basada en entry_point/version/modelo/feature -> api/v1/robot/move
robotRouter.post("/", validate, robotController);

export default robotRouter;
