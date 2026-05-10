// Ticket Command - Create a support ticket
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const Ticket = require('../../models/Ticket');

module.exports = {
  name: 'ticket',
  description: 'Create a support ticket',
  options: [
    {
      name: 'reason',
      description: 'Reason for the ticket',
      type: 'STRING',
      required: true
    }
  ],
  async execute(interaction) {
    const reason = interaction.options.getString('reason');
    const ticketId = `ticket-${Date.now()}`;
    
    try {
      const channel = await interaction.guild.channels.create({
        name: ticketId,
        type: 'GUILD_TEXT',
        permissionOverwrites: [
          {
            id: interaction.guild.id,
            deny: ['VIEW_CHANNEL']
          },
          {
            id: interaction.user.id,
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
          }
        ]
      });
      
      await Ticket.create({
        ticketId,
        guildId: interaction.guild.id,
        userId: interaction.user.id,
        channelId: channel.id,
        reason
      });
      
      await channel.send(`📋 **Support Ticket**\nReason: ${reason}\nCreated by: ${interaction.user}`);
      await interaction.reply(`✅ Ticket created: ${channel}`);
    } catch (error) {
      await interaction.reply(`❌ Error: ${error.message}`);
    }
  }
};