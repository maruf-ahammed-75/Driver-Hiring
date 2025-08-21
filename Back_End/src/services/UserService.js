const UserModel = require("../models/UserModel");

// Service to get a user's profile by ID
const getUserProfileService = async (userId) => {
  try {
    const user = await UserModel.findById(userId).select("-password"); // Exclude password field
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error("Error fetching user profile: " + error.message);
  }
};

// Service to update a user's profile
const updateUserProfileService = async (userId, updateData) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(userId, updateData, {
      new: true,
    }).select("-password"); // Exclude password field
    if (!updatedUser) {
      throw new Error("User not found");
    }
    return updatedUser;
  } catch (error) {
    throw new Error("Error updating user profile: " + error.message);
  }
};

// Service to delete a user's account
const deleteUserAccountService = async (userId) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(userId);
    if (!deletedUser) {
      throw new Error("User not found");
    }
    return deletedUser;
  } catch (error) {
    throw new Error("Error deleting user account: " + error.message);
  }
};

// Service to get all users
const getAllUsersService = async () => {
  try {
    const users = await UserModel.find().select("-password"); // Exclude password field
    return users;
  } catch (error) {
    throw new Error("Error fetching users: " + error.message);
  }
};

module.exports = {
  getUserProfileService,
  updateUserProfileService,
  deleteUserAccountService,
  getAllUsersService,
};