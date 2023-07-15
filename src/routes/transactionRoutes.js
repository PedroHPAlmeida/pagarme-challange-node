import { Router } from "express";
import TransactionController from "../controllers/TransactionController.js";

const router = Router();

router
	.post("/api/transactions", TransactionController.create)
	.get("/api/transactions", TransactionController.findAll);

export default router;
