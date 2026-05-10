// Interaction Create Event - Handle Commands and Buttons
const { InteractionType } = require('discord.js');

module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if (interaction.type === InteractionType.ApplicationCommand) {
      console.log(`Command executed: ${interaction.commandName} by ${interaction.user.tag}`);
      // Handle slash commands
    }
    
    if (interaction.isButton()) {
      console.log(`Button clicked: ${interaction.customId} by ${interaction.user.tag}`);
      // Handle button interactions
    }
  }
};