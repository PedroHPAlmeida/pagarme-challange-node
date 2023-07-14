import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
	value: { type: Number, required: [true, "value is a required field"] },
	description: { type: String, required: [true, "description is a required field"] },
	paymentMethod: { type: String,  required: [true, "paymentMethod is a required field"]},
	cardNumber: { type: String, required: [true, "cardNumber is a required field"] },
	cardholder: { type: String, required: [true, "cardholder is a required field"] },
	cardExpirationDate: { type: Date, required: [true, "cardExpirationDate is a required field"] },
	cardCvv: { type: Number, required: [true, "cardCvv is a required field"] }
});

const Transaction = mongoose.model("transactions", transactionSchema);

export default Transaction;
