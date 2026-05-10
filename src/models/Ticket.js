// Ticket Model - MongoDB Schema
const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  ticketId: {
    type: String,
    required: true,
    unique: true
  },
  guildId: String,
  userId: String,
  channelId: String,
  status: {
    type: String,
    enum: ['open', 'closed', 'locked'],
    default: 'open'
  },
  reason: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  closedAt: Date
});

module.exports = mongoose.model('Ticket', ticketSchema);