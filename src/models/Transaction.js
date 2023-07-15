import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
	value: { type: Number, required: [true, "value is a required field"] },
	description: { type: String, required: [true, "description is a required field"] },
	paymentMethod: {
		type: String,
		enum: {
			values: ["debit_card", "credit_card"],
			message: "allowed values for field paymentMethod are debit_card and credit_card"
		}, required: [true, "paymentMethod is a required field"]},
	cardNumber: { type: String, required: [true, "cardNumber is a required field"] },
	cardholder: { type: String, required: [true, "cardholder is a required field"] },
	cardExpirationDate: { type: Date, required: [true, "cardExpirationDate is a required field"] },
	cardCvv: { type: Number, required: [true, "cardCvv is a required field"] }
}, { timestamps: true });

const Transaction = mongoose.model("transactions", transactionSchema);

export default Transaction;
