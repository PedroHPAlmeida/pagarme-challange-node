import PayableService from "../services/PayableService.js";

class PayableController {

	static async findPayables(req, res, next) {
		try {
			// TODO - implmentar tratamento adequado para os valores permitidos  
			let status = req.query.cash;
			if (status === "available") {
				status = "paid";
			}
			const payables = await PayableService.findPayablesByStatus(status);
			const amount = payables.reduce((acc, p) => acc + p.value, 0);
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
