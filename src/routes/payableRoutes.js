import { Router } from "express";
import PayableController from "../controllers/PayablesController.js";

const router = Router();

router
	.get("/api/payables", PayableController.findPayables);

export default router;
