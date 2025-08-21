const CustomerSupportModel = require('../models/CustomerSupportModel');

// Service to create a new support ticket
const createTicketService = async (ticketData) => {
  try {
    const newTicket = new CustomerSupportModel(ticketData);
    await newTicket.save();
    return newTicket;
  } catch (error) {
    throw new Error('Error creating ticket: ' + error.message);
  }
};

// Service to get all support tickets
const getTicketsService = async (filter = {}) => {
  try {
    const tickets = await CustomerSupportModel.find(filter);
    return tickets;
  } catch (error) {
    throw new Error('Error fetching tickets: ' + error.message);
  }
};

// Service to update the status of a support ticket
const updateTicketStatusService = async (ticketId, status) => {
  try {
    const updatedTicket = await CustomerSupportModel.findByIdAndUpdate(
      ticketId,
      { status },
      { new: true }
    );
    if (!updatedTicket) {
      throw new Error('Ticket not found');
    }
    return updatedTicket;
  } catch (error) {
    throw new Error('Error updating ticket status: ' + error.message);
  }
};

module.exports = {
  createTicketService,
  getTicketsService,
  updateTicketStatusService,
};