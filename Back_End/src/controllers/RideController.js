const {
  bookRideService,
  acceptRideService,
  updateRideStatusService,
  cancelRideService,
  getRideHistoryService,
} = require('../services/RideService');

// Controller to book a ride
exports.bookRide = async (req, res) => {
  try {
    const rideData = req.body; // Ride details from the request body
    const newRide = await bookRideService(rideData);
    res.status(201).json({ success: true, data: newRide });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to accept a ride
exports.acceptRide = async (req, res) => {
  try {
    const { rideId } = req.params; // Ride ID from URL parameters
    const { driverId } = req.body; // Driver ID from the request body
    const acceptedRide = await acceptRideService(rideId, driverId);
    res.status(200).json({ success: true, data: acceptedRide });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to update the status of a ride
exports.updateRideStatus = async (req, res) => {
  try {
    const { rideId } = req.params; // Ride ID from URL parameters
    const { status } = req.body; // New status from the request body
    const updatedRide = await updateRideStatusService(rideId, status);
    res.status(200).json({ success: true, data: updatedRide });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to cancel a ride
exports.cancelRide = async (req, res) => {
  try {
    const { rideId } = req.params; // Ride ID from URL parameters
    const canceledRide = await cancelRideService(rideId);
    res.status(200).json({ success: true, data: canceledRide });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to get ride history for a user
exports.getRideHistory = async (req, res) => {
  try {
    const { userId } = req.params; // User ID from URL parameters
    const rideHistory = await getRideHistoryService(userId);
    res.status(200).json({ success: true, data: rideHistory });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};