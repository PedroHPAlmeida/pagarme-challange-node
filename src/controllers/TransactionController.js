import { transactionService } from "../services/index.js";

class TransactionController {

	static async create(req, res, next) {
		try {
			const body = req.body;
			const transaction = await transactionService.create(body);
			res.status(201).json(transaction);
		} catch (error) {
			next(error);
		}
	}

	static async findAll(_, res, next) {
		try {
			const transactions = await transactionService.findAll();
			res.status(200).json(transactions);
		} catch (error) {
			next(error);
		}
	}

}

export default TransactionController;
