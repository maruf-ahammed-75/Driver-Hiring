//superadmin
// Has full control over the system.
// Can manage users, drivers, payments, rides, and security.
// Can create, update, or delete moderators.


// moderator
// Has limited administrative permissions.
// Can handle customer support, verify documents, and manage rides.
// Cannot create or delete superdmins or moderators.

const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["superadmin", "moderator"], required: true },
  },
  { timestamps: true, versionKey: false }
);

const AdminModel = mongoose.model("admins", AdminSchema);
module.exports = AdminModel;