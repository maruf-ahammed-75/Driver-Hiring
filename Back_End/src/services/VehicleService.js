const VehicleModel = require("../models/VehicleModel");

// Service to add a new vehicle
const addVehicleService = async (vehicleData) => {
  try {
    const newVehicle = new VehicleModel(vehicleData);
    await newVehicle.save();
    return newVehicle;
  } catch (error) {
    throw new Error("Error adding vehicle: " + error.message);
  }
};

// Service to update vehicle details
const updateVehicleService = async (vehicleId, updateData) => {
  try {
    const updatedVehicle = await VehicleModel.findByIdAndUpdate(
      vehicleId,
      updateData,
      { new: true }
    );
    if (!updatedVehicle) {
      throw new Error("Vehicle not found");
    }
    return updatedVehicle;
  } catch (error) {
    throw new Error("Error updating vehicle: " + error.message);
  }
};

// Service to get vehicle details by ID
const mongoose = require("mongoose");

const getVehicleService = async (vehicleId) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(vehicleId)) {
      throw new Error("Invalid vehicle ID");
    }
    const vehicle = await VehicleModel.findById(vehicleId);
    if (!vehicle) {
      throw new Error("Vehicle not found");
    }
    return vehicle;
  } catch (error) {
    throw new Error("Error fetching vehicle: " + error.message);
  }
};

// Service to delete a vehicle
const deleteVehicleService = async (vehicleId) => {
  try {
    const deletedVehicle = await VehicleModel.findByIdAndDelete(vehicleId);
    if (!deletedVehicle) {
      throw new Error("Vehicle not found");
    }
    return deletedVehicle;
  } catch (error) {
    throw new Error("Error deleting vehicle: " + error.message);
  }
};

module.exports = {
  addVehicleService,
  updateVehicleService,
  getVehicleService,
  deleteVehicleService,
};