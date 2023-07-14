import mongoose from "mongoose";
import ValidationError from "../errors/ValidationError.js";
import BaseError from "../errors/BaseError.js";


// eslint-disable-next-line no-unused-vars
function handler(err, req, res, next) {
	if (err instanceof mongoose.Error.ValidationError) {
		new ValidationError(err).sendResponse(res);
	} else {
		new BaseError().sendResponse(res);
	}
}

export default handler;
