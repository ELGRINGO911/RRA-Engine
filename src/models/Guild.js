// Guild Model - MongoDB Schema
const mongoose = require('mongoose');

const guildSchema = new mongoose.Schema({
  guildId: {
    type: String,
    required: true,
    unique: true
  },
  guildName: String,
  prefix: {
    type: String,
    default: '!'
  },
  welcomeChannel: String,
  modLogChannel: String,
  ticketCategory: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Guild', guildSchema);