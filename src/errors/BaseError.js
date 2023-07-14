class BaseError extends Error {

	constructor(message = "Internal error", status = 500) {
		super();
		this.message = message;
		this.status = status;
	}

	sendResponse(res) {
		res.status(this.status).json({ message: this.message });
	}

}

export default BaseError;
