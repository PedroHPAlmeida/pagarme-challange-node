class InvalidPaymentMethodError extends Error {
    
	constructor(message) {
		super(message);
		this.name = "InvalidPaymentMethodError";
	}

}

export default InvalidPaymentMethodError;
