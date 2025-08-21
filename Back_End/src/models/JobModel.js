// for posting job

const mongoose = require("mongoose");

const JobSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "admins", required: true },
    applicants: [
      {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

const JobModel = mongoose.model("jobs", JobSchema);
module.exports = JobModel;