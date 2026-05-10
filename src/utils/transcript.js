// Transcript Utility - For logging conversations and events

const fs = require('fs');
const path = require('path');

// Create a transcript file
function createTranscript(channelName, messages) {
  const timestamp = new Date().toISOString().split('T')[0];
  const filename = `transcripts/${channelName}_${timestamp}.txt`;
  
  // Ensure directory exists
  if (!fs.existsSync('transcripts')) {
    fs.mkdirSync('transcripts', { recursive: true });
  }
  
  let content = `Transcript for ${channelName}\n`;
  content += `Generated: ${new Date().toLocaleString()}\n`;
  content += '='.repeat(50) + '\n\n';
  
  messages.forEach(msg => {
    content += `[${msg.timestamp}] ${msg.author}: ${msg.content}\n`;
  });
  
  fs.writeFileSync(filename, content);
  return filename;
}

// Log a message
function logMessage(author, content, channel) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`[${timestamp}] ${channel} - ${author}: ${content}`);
}

module.exports = {
  createTranscript,
  logMessage
};