class InvalidPayableStatusError extends Error {
    
	constructor(message) {
		super(message);
		this.name = "InvalidPayableStatusError";
	}

}

export default InvalidPayableStatusError;
