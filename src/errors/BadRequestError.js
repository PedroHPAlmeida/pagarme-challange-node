import BaseError from "./BaseError.js";

class BadRequestError extends BaseError {

	constructor(message = "One or more data provided is incorrect") {
		super(message, 400);
	}

}

export default BadRequestError;
