const { initiatePaymentService, verifyPaymentService, getPaymentHistoryService } = require('../services/PaymentService');

// Controller to initiate a payment
exports.initiatePayment = async (req, res) => {
  try {
    const paymentData = req.body; // Payment details from the request body
    const newPayment = await initiatePaymentService(paymentData);
    res.status(201).json({ success: true, data: newPayment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to verify a payment
exports.verifyPayment = async (req, res) => {
  try {
    const { id } = req.params; // Payment ID from URL parameters
    const verificationData = req.body; // Verification details from the request body
    const verifiedPayment = await verifyPaymentService(id, verificationData);
    res.status(200).json({ success: true, data: verifiedPayment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to get payment history
exports.getPaymentHistory = async (req, res) => {
  try {
    const filter = req.query; // Optional filters from query parameters
    const paymentHistory = await getPaymentHistoryService(filter);
    res.status(200).json({ success: true, data: paymentHistory });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};