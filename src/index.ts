import "dotenv/config";
import createDebug from "debug";
import app from "./server/app.js";

const debug = createDebug("incaptoTest-api:root");

const port = process.env.PORT ?? 4000;

const localhost = `http:localhost:${port}`;

app.listen(port, () => {
  debug(`Listening on ${localhost}`);
});
