import { transactionService } from "../services/index.js";

class TransactionController {

	static async create(req, res) {
		try {
			const body = req.body;
			const transaction = await transactionService.create(body);
			res.status(201).json(transaction);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}

	static async findAll(_, res) {
		try {
			const transactions = await transactionService.findAll();
			res.status(200).json(transactions);
		} catch (error) {
			res.status(500).json({ message: error.error });
		}
	}

}

export default TransactionController;
