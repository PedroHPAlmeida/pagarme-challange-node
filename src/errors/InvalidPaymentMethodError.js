class InvalidPaymentMethodError extends Error {
    
	constructor(message) {
		super();
		this.message = message;
	}

}

export default InvalidPaymentMethodError;
