import { transactions } from "../models/index.js";

class TransactionService {

	static async create(transaction) {
		const lastFourNumbersOfCard = transaction.cardNumber.substring(transaction.cardNumber.length - 4); 
		transaction.cardNumber = lastFourNumbersOfCard;
		return await transactions.create(new transactions(transaction));
	}

	static async findAll() {
		return await transactions.find();
	}

}

export default TransactionService;
