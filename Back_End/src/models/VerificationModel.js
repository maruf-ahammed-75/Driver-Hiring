

const mongoose = require("mongoose");

const VerificationSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    documentType: { type: String, enum: ["ID Card", "Driver License", "Passport"], required: true },
    documentUrl: { type: String, required: true },
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  },
  { timestamps: true, versionKey: false }
);

const VerificationModel = mongoose.model("verifications", VerificationSchema);
module.exports = VerificationModel;