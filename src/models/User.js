// User Model - MongoDB Schema
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  username: String,
  level: {
    type: Number,
    default: 0
  },
  experience: {
    type: Number,
    default: 0
  },
  balance: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  warnings: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('User', userSchema);