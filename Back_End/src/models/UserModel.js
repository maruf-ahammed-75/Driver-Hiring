//For user registration.

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "driver"], required: true },
    profilePicture: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;