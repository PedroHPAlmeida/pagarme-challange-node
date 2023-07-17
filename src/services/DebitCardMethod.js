class DebitCardMethod {

	calculateStatus() {
		return "paid";
	}

	calculateFee(value) {
		return value * 0.03;
	}

	calculatePaymentDate(paymentDate) {
		return new Date(paymentDate);
	}

}

export default DebitCardMethod;
