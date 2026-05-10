// Message Create Event - Handle Messages
const { aiEngine } = require('../utils/aiEngine');

module.exports = {
  name: 'messageCreate',
  async execute(message) {
    if (message.author.bot) return;
    
    console.log(`Message from ${message.author.tag}: ${message.content}`);
    // Handle message logic here
  }
};