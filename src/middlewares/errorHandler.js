import mongoose from "mongoose";
import ValidationError from "../errors/ValidationError.js";
import BaseError from "../errors/BaseError.js";
import InvalidPaymentMethodError from "../errors/InvalidPaymentMethodError.js";
import BadRequestError from "../errors/BadRequestError.js";


// eslint-disable-next-line no-unused-vars
function handler(err, req, res, next) {
	console.log(err.message);
	if (err instanceof mongoose.Error.ValidationError) {
		new ValidationError(err).sendResponse(res);
	} else if (err instanceof InvalidPaymentMethodError) {
		new BadRequestError(err.message).sendResponse(res);
	} else {
		new BaseError().sendResponse(res);
	}
}

export default handler;
