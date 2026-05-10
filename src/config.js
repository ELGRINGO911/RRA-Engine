// RRA-Engine Configuration

module.exports = {
  // Bot Colors
  colors: {
    primary: '#5865F2',    // Discord Blue
    success: '#57F287',    // Green
    warning: '#FEE75C',    // Yellow
    error: '#ED4245',      // Red
    info: '#00B0F4'        // Cyan
  },

  // General Configuration
  prefix: '!',
  cooldown: 3000, // Cooldown en milisegundos
  
  // Database
  mongoURI: process.env.MONGO_URI,
  
  // Bot Token
  token: process.env.TOKEN
};