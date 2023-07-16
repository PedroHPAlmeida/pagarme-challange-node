import BadRequestError from "./BadRequestError.js";

class ValidationError extends BadRequestError {

	constructor(err) {
		const errorMessages = Object.values(err.errors)
			.map(e => e.message)
			.join("; ");
		super(errorMessages);
		this.name = "ValidationError";
	}

}

export default ValidationError;
