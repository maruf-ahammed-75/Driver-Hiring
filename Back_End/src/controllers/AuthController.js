const { registerUserService, loginUserService } = require("../services/AuthService");

// Controller to handle user registration
exports.registerUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await registerUserService(userData);
    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Controller to handle user login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginUserService(email, password);
    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};