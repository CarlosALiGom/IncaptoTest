import express from "express";
import morgan from "morgan";
import validate from "./middlewares/validateMiddleware/validateMiddleware.js";
import {
  generalError,
  notFoundError,
} from "./middlewares/errorMiddlewares/errorMiddlewares.js";
import robotController from "./controllers/robot/robotController.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.disable("x-powered-by");

app.post("/robot", validate, robotController);

app.use(notFoundError);

app.use(generalError);

export default app;
