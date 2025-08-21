const express = require("express");

const AdminController = require('../controllers/AdminController');
const CustomerSupportController = require('../controllers/CustomerSupportController');
const JobController = require("../controllers/JobController");
const PaymentController = require("../controllers/PaymentController");
const RideController = require("../controllers/RideController");
const UserController = require("../controllers/UserController");
const VehicleController = require("../controllers/VehicleController");
const VerificationController = require("../controllers/VerificationController");
const AuthController = require("../controllers/AuthController");

const router = express.Router();

//Admin
router.get('/Users',AdminController.getAllUsers); // Route to get all users
router.get('/Drivers',AdminController.getAllDrivers); // Route to get all drivers
router.patch("/users/:id/suspend", AdminController.suspendUser); // Route to suspend a user
router.patch("/drivers/:id/approve", AdminController.approveDriver); // Route to approve a driver

//CustomerSupport
router.post("/tickets", CustomerSupportController.createTicket); // Route to create a support ticket
router.get("/getTickets", CustomerSupportController.getTickets); // Route to get all support tickets
router.patch("/tickets/:id/status", CustomerSupportController.updateTicketStatus); // Route to update the status of a support ticket

//Job
router.post("/job/create", JobController.createJob); // Route to create a job
router.get("/job/getJobs", JobController.getJobs); // Route to get all jobs
router.post("/job/:jobId/apply", JobController.applyForJob); // Route to apply for a job
router.delete("/job/:id", JobController.deleteJob); // Route to delete a job

//Payment
router.post("/initiate", PaymentController.initiatePayment); // Route to initiate payment
router.get("/:paymentId/verify", PaymentController.verifyPayment); // Route to verify payment
router.get("/history/:userId", PaymentController.getPaymentHistory); // Route to get payment history


//Rider
router.post("/book", RideController.bookRide);// Route to book a ride
router.patch("/:rideId/accept", RideController.acceptRide);// Route to accept a ride
router.patch("/:rideId/status", RideController.updateRideStatus);// Route to update the status of a ride
router.delete("/rider/:rideId", RideController.cancelRide);// Route to cancel a ride
router.get("/history/:userId", RideController.getRideHistory);// Route to get ride history


//User
router.get("/user/:id", UserController.getUserProfile);// Route to get user profile by ID
router.put("/user/:id", UserController.updateUserProfile);// Route to update user profile
router.delete("/user/:id", UserController.deleteUserAccount);// Route to delete user account
router.get("/user/allUser", UserController.getAllUsers);// Route to get all users (Admin only)


//Vehicle
router.post("/vehicle/add", VehicleController.addVehicle);// Route to add a vehicle
router.put("/vehicle/:vehicleId", VehicleController.updateVehicle);// Route to update vehicle details
router.get("/vehicle/:vehicleId", VehicleController.getVehicle);// Route to get vehicle details
router.delete("/vehicle/:vehicleId", VehicleController.deleteVehicle);// Route to delete a vehicle


//Verification

router.post("/submit", VerificationController.submitDocument);// Route to submit a document for verification
router.patch("/:documentId/approve", VerificationController.approveDocument);// Route to approve a submitted document
router.get("/pending", VerificationController.getPendingVerifications);// Route to get all pending verifications

//Route for user registration
router.post("/register", AuthController.registerUser);

// Route for user login
router.post("/login", AuthController.loginUser);


module.exports = router