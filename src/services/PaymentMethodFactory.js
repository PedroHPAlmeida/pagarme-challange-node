import DebitCardMethod from "./DebitCardMethod.js";
import CreditCardMethod from "./CreditCardMethod.js";
import InvalidPaymentMethodError from "../errors/InvalidPaymentMethodError.js";

class PaymentMethodFactory {

	static createPaymentMethod(type) {
		if (type === "debit_card") {
			return new DebitCardMethod(); 
		} else if (type === "credit_card") {
			return new CreditCardMethod();
		} else {
			throw new InvalidPaymentMethodError(`payment method ${type} is not valid`);
		}
	}

}

export default PaymentMethodFactory;
