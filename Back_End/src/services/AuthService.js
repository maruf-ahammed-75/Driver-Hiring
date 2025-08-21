const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Service to register a new user
const registerUserService = async (userData) => {
  try {
    // Check if the email or phone already exists
    const existingUser = await UserModel.findOne({
      $or: [{ email: userData.email }, { phone: userData.phone }],
    });
    if (existingUser) {
      throw new Error("Email or phone number already exists");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    // Create and save the new user
    const newUser = new UserModel(userData);
    await newUser.save();
    return { id: newUser._id, email: newUser.email, role: newUser.role };
  } catch (error) {
    throw new Error("Error registering user: " + error.message);
  }
};

// Service to login a user
const loginUserService = async (email, password) => {
  try {
    // Find the user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "your_jwt_secret", // Replace with your secret key
      { expiresIn: "1d" }
    );

    return token;
  } catch (error) {
    throw new Error("Error logging in: " + error.message);
  }
};

module.exports = {
  registerUserService,
  loginUserService,
};