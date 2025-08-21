const {
    getAllUsersService,
    getAllDriversService,
    suspendUserService,
    approveDriverService,
  } = require("../services/AdminService");
  
  // Controller to get all users
  exports.getAllUsers = async (req, res) => {
    try {
      const users = await getAllUsersService();
      res.status(200).json({ success: true, data: users });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  // Controller to get all drivers
  exports.getAllDrivers = async (req, res) => {
    try {
      const drivers = await getAllDriversService();
      res.status(200).json({ success: true, data: drivers });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  // Controller to suspend a user
  exports.suspendUser = async (req, res) => {
    try {
      const { id } = req.params;
      const suspendedUser = await suspendUserService(id);
      res.status(200).json({ success: true, data: suspendedUser });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  // Controller to approve a driver
  exports.approveDriver = async (req, res) => {
    try {
      const { id } = req.params;
      const approvedDriver = await approveDriverService(id);
      res.status(200).json({ success: true, data: approvedDriver });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };