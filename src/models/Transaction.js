import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
	value: { type: Number, required: true },
	description: { type: String, required: true },
	paymentMethod: { type: String,  required: true},
	cardNumber: { type: String, required: true },
	cardholder: { type: String, required: true },
	cardExpirationDate: { type: Date, required: true },
	cardCvv: { type: Number, required: true }
});

const Transaction = mongoose.model("transactions", transactionSchema);

export default Transaction;
