const {
  addVehicleService,
  updateVehicleService,
  getVehicleService,
  deleteVehicleService,
} = require('../services/VehicleService');

// Controller to add a new vehicle
exports.addVehicle = async (req, res) => {
  try {
    const vehicleData = req.body; // Vehicle details from the request body
    const newVehicle = await addVehicleService(vehicleData);
    res.status(201).json({ success: true, data: newVehicle });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to update vehicle details
exports.updateVehicle = async (req, res) => {
  try {
    const { vehicleId } = req.params; // Vehicle ID from URL parameters
    const updateData = req.body; // Updated vehicle details from the request body
    const updatedVehicle = await updateVehicleService(vehicleId, updateData);
    res.status(200).json({ success: true, data: updatedVehicle });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to get vehicle details by ID
exports.getVehicle = async (req, res) => {
  try {
    const { vehicleId } = req.params; // Vehicle ID from URL parameters
    const vehicle = await getVehicleService(vehicleId);
    res.status(200).json({ success: true, data: vehicle });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to delete a vehicle
exports.deleteVehicle = async (req, res) => {
  try {
    const { vehicleId } = req.params; // Vehicle ID from URL parameters
    const deletedVehicle = await deleteVehicleService(vehicleId);
    res.status(200).json({ success: true, data: deletedVehicle });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};