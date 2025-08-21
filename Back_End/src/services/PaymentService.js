const PaymentModel = require('../models/PaymentModel');

// Service to initiate a payment
const initiatePaymentService = async (paymentData) => {
  try {
    const newPayment = new PaymentModel(paymentData);
    await newPayment.save();
    return newPayment;
  } catch (error) {
    throw new Error('Error initiating payment: ' + error.message);
  }
};

// Service to verify a payment
const verifyPaymentService = async (paymentId, verificationData) => {
  try {
    const payment = await PaymentModel.findById(paymentId);
    if (!payment) {
      throw new Error('Payment not found');
    }
    payment.isVerified = verificationData.isVerified; // Assuming isVerified is a field in PaymentModel
    payment.verificationDetails = verificationData.details; // Store additional verification details
    await payment.save();
    return payment;
  } catch (error) {
    throw new Error('Error verifying payment: ' + error.message);
  }
};

// Service to get payment history
const getPaymentHistoryService = async (filter = {}) => {
  try {
    const paymentHistory = await PaymentModel.find(filter);
    return paymentHistory;
  } catch (error) {
    throw new Error('Error fetching payment history: ' + error.message);
  }
};

module.exports = {
  initiatePaymentService,
  verifyPaymentService,
  getPaymentHistoryService,
};