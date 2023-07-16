import express from "express";
import transactionRoutes from "./transactionRoutes.js";
import payableRoutes from "./payableRoutes.js";

const routes = (app) => {
	app.route("/").get((req, res) => {
		res.status(200).json({ status: "UP" });
	});
	app.use(express.json(),
		transactionRoutes,
		payableRoutes);
};

export default routes;
