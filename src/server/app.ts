import express from "express";
import morgan from "morgan";
import validate from "./middlewares/validateMiddleware/validateMiddleware.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.disable("x-powered-by");

app.post("/robot", validate);

export default app;
