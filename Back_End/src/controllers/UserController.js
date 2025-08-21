const {
  getUserProfileService,
  updateUserProfileService,
  deleteUserAccountService,
  getAllUsersService,
} = require('../services/UserService');

// Controller to get a user's profile
exports.getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params; // User ID from URL parameters
    const userProfile = await getUserProfileService(userId);
    res.status(200).json({ success: true, data: userProfile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to update a user's profile
exports.updateUserProfile = async (req, res) => {
  try {
    const { userId } = req.params; // User ID from URL parameters
    const updateData = req.body; // Updated profile data from the request body
    const updatedUser = await updateUserProfileService(userId, updateData);
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to delete a user's account
exports.deleteUserAccount = async (req, res) => {
  try {
    const { userId } = req.params; // User ID from URL parameters
    const deletedUser = await deleteUserAccountService(userId);
    res.status(200).json({ success: true, data: deletedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};