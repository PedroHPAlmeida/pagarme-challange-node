import { payables } from "../models/index.js";
import InvalidPaymentMethodError from "../errors/InvalidPaymentMethodError.js";
import InvalidPayableStatusError from "../errors/InvalidPayableStatusError.js";

class PayableService {

	static async create(transaction) {
		const fee = PayableService.calculateFee(transaction.value, transaction.paymentMethod);
		const payable = {
			value: transaction.value - fee,
			status: PayableService.calculateStatus(transaction.paymentMethod),
			fee: fee,
			paymentDate: PayableService.calculatePaymentDate(new Date(), transaction.paymentMethod)
		};
		return await payables.create(new payables(payable));
	}

	// TODO - aplicar DP Strategy para todos os métodos calculate
	static calculateStatus(paymentMethod) {
		if (paymentMethod === "debit_card") {
			return "paid";
		} else if (paymentMethod === "credit_card") {
			return "waiting_funds";
		} else {
			throw new InvalidPaymentMethodError(`payment method ${paymentMethod} is not valid`);
		}
	}

	static calculateFee(value, paymentMethod) {
		if (paymentMethod === "debit_card") {
			return value * 0.03;
		} else if (paymentMethod === "credit_card") {
			return value * 0.05;
		} else {
			throw new InvalidPaymentMethodError(`payment method ${paymentMethod} is not valid`);
		}
	}

	static calculatePaymentDate(paymentDate, paymentMethod) {
		const dateUpdated = new Date(paymentDate);
		if (paymentMethod === "debit_card") {
			return dateUpdated;
		} else if (paymentMethod === "credit_card") {
			// TODO - extrair o número 30 para uma constante com um nome explicativo
			dateUpdated.setDate(dateUpdated.getDate() + 30);
			return dateUpdated;
		} else {
			throw new InvalidPaymentMethodError(`payment method ${paymentMethod} is not valid`);
		} 
	}

	static async findPayablesByStatus(status) {
		const possibleStatus = ["paid", "waiting_funds"];
		if (!possibleStatus.includes(status)) {
			throw new InvalidPayableStatusError(`payable status ${status} is not valid`);
		}
		return await payables.find({ status: status });
	}

}

export default PayableService;
