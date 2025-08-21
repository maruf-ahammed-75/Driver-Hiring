//Payment

const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema(
  {
    rideId: { type: mongoose.Schema.Types.ObjectId, ref: "rides", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ["credit_card", "debit_card", "UPI", "cash", "Bkash", "Nagad", "Rocket"], required: true },
    status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
    transactionId: { type: String, unique: true, required: true },
  },
  { timestamps: true, versionKey: false }
);

const PaymentModel = mongoose.model("payments", PaymentSchema);
module.exports = PaymentModel;