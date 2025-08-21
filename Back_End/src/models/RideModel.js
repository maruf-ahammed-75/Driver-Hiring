//Stores ride details and status.

const mongoose = require("mongoose");

const RideSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    pickupLocation: { type: String, required: true },
    dropoffLocation: { type: String, required: true },
    charge: { type: Number, required: true },
    status: { type: String, enum: ["pending", "accepted", "in-progress", "completed", "canceled"], default: "pending" },
  },
  { timestamps: true, versionKey: false }
);

const RideModel = mongoose.model("rides", RideSchema);
module.exports = RideModel;