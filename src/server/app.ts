import express from "express";
import morgan from "morgan";
import {
  generalError,
  notFoundError,
} from "./middlewares/errorMiddlewares/errorMiddlewares.js";
import robotRouter from "./routers/robotRouter/robotRouter.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.disable("x-powered-by");

app.use("/robot", robotRouter);

app.use(notFoundError);

app.use(generalError);

export default app;
