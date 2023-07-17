import { payables } from "../models/index.js";
import InvalidPayableStatusError from "../errors/InvalidPayableStatusError.js";
import PaymentMethodFactory from "./PaymentMethodFactory.js"; 

class PayableService {

	static async create(transaction) {
		const paymentMethod = PaymentMethodFactory.createPaymentMethod(transaction.paymentMethod);
		const fee = paymentMethod.calculateFee(transaction.value);
		const payable = {
			value: transaction.value - fee,
			status: paymentMethod.calculateStatus(),
			fee: fee,
			paymentDate: paymentMethod.calculatePaymentDate(new Date())
		};
		return await payables.create(new payables(payable));
	}

	static async findPayablesByStatus(status) {
		const possibleStatus = ["paid", "waiting_funds"];
		if (!possibleStatus.includes(status)) {
			throw new InvalidPayableStatusError(`payable status ${status} is not valid`);
		}
		return await payables.find({ status: status });
	}

	static calculateAmount(payables) {
		return payables.reduce((acc, p) => acc + p.value, 0);
	}

}

export default PayableService;
