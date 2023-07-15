import { transactions } from "../models/index.js";
import PayableService from "./PayableService.js";

class TransactionService {

	static async create(transaction) {
		const lastFourNumbersOfCard = transaction.cardNumber.substring(transaction.cardNumber.length - 4); 
		transaction.cardNumber = lastFourNumbersOfCard;
		// TODO - validar o payable e a transaction antes de tentar salvar, para que uma não seja salva sem a outra
		const savedTransaction = await transactions.create(transactions(transaction));
		await PayableService.create(savedTransaction);
		return savedTransaction;
	}

	static async findAll() {
		return await transactions.find();
	}

}

export default TransactionService;
