const { createTicketService, getTicketsService, updateTicketStatusService } = require('../services/CustomerSupportService');

// Controller to create a support ticket
exports.createTicket = async (req, res) => {
  try {
    const ticketData = req.body;
    const newTicket = await createTicketService(ticketData);
    res.status(201).json({ success: true, data: newTicket });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to get all support tickets
exports.getTickets = async (req, res) => {
  try {
    const filter = req.query; // Optional filters from query parameters
    const tickets = await getTicketsService(filter);
    res.status(200).json({ success: true, data: tickets });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to update the status of a support ticket
exports.updateTicketStatus = async (req, res) => {
  try {
    const { id } = req.params; // Ticket ID from URL parameters
    const { status } = req.body; // New status from request body
    const updatedTicket = await updateTicketStatusService(id, status);
    res.status(200).json({ success: true, data: updatedTicket });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};