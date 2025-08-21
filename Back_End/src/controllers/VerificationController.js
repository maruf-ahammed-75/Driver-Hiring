const {
  submitDocumentService,
  approveDocumentService,
  getPendingVerificationsService,
} = require('../services/VerificationService');

// Controller to submit a document for verification
exports.submitDocument = async (req, res) => {
  try {
    const documentData = req.body; // Document details from the request body
    const newDocument = await submitDocumentService(documentData);
    res.status(201).json({ success: true, data: newDocument });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to approve a submitted document
exports.approveDocument = async (req, res) => {
  try {
    const { documentId } = req.params; // Document ID from URL parameters
    const approvedDocument = await approveDocumentService(documentId);
    res.status(200).json({ success: true, data: approvedDocument });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to get all pending verifications
exports.getPendingVerifications = async (req, res) => {
  try {
    const pendingVerifications = await getPendingVerificationsService();
    res.status(200).json({ success: true, data: pendingVerifications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};