const RideModel = require("../models/RideModel");

// Service to book a ride
const bookRideService = async (rideData) => {
  try {
    const newRide = new RideModel(rideData);
    await newRide.save();
    return newRide;
  } catch (error) {
    throw new Error("Error booking ride: " + error.message);
  }
};

// Service to accept a ride by a driver
const acceptRideService = async (rideId, driverId) => {
  try {
    const ride = await RideModel.findById(rideId);
    if (!ride) {
      throw new Error("Ride not found");
    }
    if (ride.status !== "pending") {
      throw new Error("Ride is not available for acceptance");
    }
    ride.driverId = driverId;
    ride.status = "accepted";
    await ride.save();
    return ride;
  } catch (error) {
    throw new Error("Error accepting ride: " + error.message);
  }
};

// Service to update the status of a ride
const updateRideStatusService = async (rideId, status) => {
  try {
    const ride = await RideModel.findByIdAndUpdate(
      rideId,
      { status },
      { new: true }
    );
    if (!ride) {
      throw new Error("Ride not found");
    }
    return ride;
  } catch (error) {
    throw new Error("Error updating ride status: " + error.message);
  }
};

// Service to cancel a ride
const cancelRideService = async (rideId) => {
  try {
    const ride = await RideModel.findByIdAndUpdate(
      rideId,
      { status: "canceled" },
      { new: true }
    );
    if (!ride) {
      throw new Error("Ride not found");
    }
    return ride;
  } catch (error) {
    throw new Error("Error canceling ride: " + error.message);
  }
};

// Service to get ride history for a user
const getRideHistoryService = async (userId) => {
  try {
    const rideHistory = await RideModel.find({ userId }).sort({ createdAt: -1 });
    return rideHistory;
  } catch (error) {
    throw new Error("Error fetching ride history: " + error.message);
  }
};

module.exports = {
  bookRideService,
  acceptRideService,
  updateRideStatusService,
  cancelRideService,
  getRideHistoryService,
};