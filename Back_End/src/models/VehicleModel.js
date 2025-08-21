//For vehicle upload.

const mongoose = require("mongoose");

const VehicleSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    carModel: { type: String, required: true },
    carNumber: { type: String, unique: true, required: true },
    carColor: { type: String, required: true },
    carType: { type: String, enum: ["Sedan", "SUV", "Hatchback", "Electric", "Hybrid"], required: true },
  },
  { timestamps: true, versionKey: false }
);

const VehicleModel = mongoose.model("vehicles", VehicleSchema);
module.exports = VehicleModel;