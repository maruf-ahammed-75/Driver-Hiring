const JobModel = require('../models/JobModel');

// Service to create a new job
const createJobService = async (jobData) => {
  try {
    const newJob = new JobModel(jobData);
    await newJob.save();
    return newJob;
  } catch (error) {
    throw new Error('Error creating job: ' + error.message);
  }
};

// Service to get all jobs or filter jobs
const getJobsService = async (filter = {}) => {
  try {
    const jobs = await JobModel.find(filter);
    return jobs;
  } catch (error) {
    throw new Error('Error fetching jobs: ' + error.message);
  }
};

// Service to apply for a job
const applyForJobService = async (jobId, applicantData) => {
  try {
    const job = await JobModel.findById(jobId);
    if (!job) {
      throw new Error('Job not found');
    }
    job.applicants.push(applicantData); // Assuming applicants is an array in the JobModel
    await job.save();
    return job;
  } catch (error) {
    throw new Error('Error applying for job: ' + error.message);
  }
};

// Service to delete a job
const deleteJobService = async (jobId) => {
  try {
    const deletedJob = await JobModel.findByIdAndDelete(jobId);
    if (!deletedJob) {
      throw new Error('Job not found');
    }
    return deletedJob;
  } catch (error) {
    throw new Error('Error deleting job: ' + error.message);
  }
};

module.exports = {
  createJobService,
  getJobsService,
  applyForJobService,
  deleteJobService,
};