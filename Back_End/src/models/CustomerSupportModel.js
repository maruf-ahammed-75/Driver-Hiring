

const mongoose = require("mongoose");

const CustomerSupportSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ["open", "in-progress", "resolved"], default: "open" },
  },
  { timestamps: true, versionKey: false }
);
const CustomerSupportModel = mongoose.model("support_tickets", CustomerSupportSchema);
module.exports = CustomerSupportModel;