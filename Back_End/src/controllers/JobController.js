const { 
  createJobService, 
  getJobsService, 
  applyForJobService, 
  deleteJobService 
} = require('../services/JobService');

// Controller to create a new job
exports.createJob = async (req, res) => {
  try {
    const jobData = req.body;
    const newJob = await createJobService(jobData);
    res.status(201).json({ success: true, data: newJob });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to get all jobs or filter jobs
exports.getJobs = async (req, res) => {
  try {
    const filter = req.query; // Optional filters from query parameters
    const jobs = await getJobsService(filter);
    res.status(200).json({ success: true, data: jobs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to apply for a job
exports.applyForJob = async (req, res) => {
  try {
    const { jobId } = req.params; // Job ID from URL parameters
    const applicantData = req.body; // Applicant data from request body
    const updatedJob = await applyForJobService(jobId, applicantData);
    res.status(200).json({ success: true, data: updatedJob });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to delete a job
exports.deleteJob = async (req, res) => {
  try {
    const { id } = req.params; // Job ID from URL parameters
    const deletedJob = await deleteJobService(id);
    res.status(200).json({ success: true, data: deletedJob });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};