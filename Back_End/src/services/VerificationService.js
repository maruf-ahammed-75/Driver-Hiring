const VerificationModel = require("../models/VerificationModel");

// Service to submit a document for verification
const submitDocumentService = async (documentData) => {
  try {
    const newDocument = new VerificationModel(documentData);
    await newDocument.save();
    return newDocument;
  } catch (error) {
    throw new Error("Error submitting document: " + error.message);
  }
};

// Service to approve a submitted document
const approveDocumentService = async (documentId) => {
  try {
    const updatedDocument = await VerificationModel.findByIdAndUpdate(
      documentId,
      { status: "approved" },
      { new: true }
    );
    if (!updatedDocument) {
      throw new Error("Document not found");
    }
    return updatedDocument;
  } catch (error) {
    throw new Error("Error approving document: " + error.message);
  }
};

// Service to get all pending verifications
const getPendingVerificationsService = async () => {
  try {
    const pendingVerifications = await VerificationModel.find({ status: "pending" });
    return pendingVerifications;
  } catch (error) {
    throw new Error("Error fetching pending verifications: " + error.message);
  }
};

module.exports = {
  submitDocumentService,
  approveDocumentService,
  getPendingVerificationsService,
};