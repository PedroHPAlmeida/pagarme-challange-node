import mongoose from "mongoose";

const payableSchema = new mongoose.Schema({
	value: { type: Number, required: [true, "value is a required field"] },
	status: {
		type: String,
		enum: {
			values: ["paid", "waiting_funds"],
			message: "allowed values for field status are paid and waiting_funds"
		},
		required: [true, "status is a required field"]
	},
	paymentDate: { type: Date, required: [true, "paymentDate is a required field"] },
	fee: { type: Number, required: [true, "fee is a required field"] } 
});

const Payable = mongoose.model("payables", payableSchema);

export default Payable;
