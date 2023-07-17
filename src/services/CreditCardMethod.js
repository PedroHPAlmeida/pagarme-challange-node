class CreditCardMethod {

	calculateStatus() {
		return "waiting_funds";
	}

	calculateFee(value) {
		return value * 0.05;
	}

	calculatePaymentDate(paymentDate) {
		const DAYS_TO_RECEIVE_PAYMENT = 30;
		const dateUpdated = new Date(paymentDate);
		dateUpdated.setDate(dateUpdated.getDate() + DAYS_TO_RECEIVE_PAYMENT);
		return dateUpdated;
	}

}

export default CreditCardMethod;
