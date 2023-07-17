import { PayableService } from "../services/index.js";

class PayableController {

	static async findPayables(req, res, next) {
		try {
			let status = req.query.cash;
			if (status === "available") {
				status = "paid";
			}
			const payables = await PayableService.findPayablesByStatus(status);
			const amount = PayableService.calculateAmount(payables);
			res.status(200).json({
				amount: amount,
				payables: payables
			});
		} catch (error) {
			next(error);
		}       
	}

}

export default PayableController;
