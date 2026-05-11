const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    guildId: String,
    userId: String,
    channelId: String,
    type: String,
    status: { type: String, default: 'open' },
    claimedBy: { type: String, default: null },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);
