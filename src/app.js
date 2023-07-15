import express from "express";
import db from "./config/db.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

db.on("error", console.log.bind(console, "Connection error"));
db.once("open", () => {
	console.log("The connection to the database was successful");
});

const app = express();
routes(app);
app.use(errorHandler);

export default app;
