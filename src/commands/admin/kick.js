// Kick Command

module.exports = {
  name: 'kick',
  description: 'Kick a user from the server',
  options: [
    {
      name: 'user',
      description: 'User to kick',
      type: 'USER',
      required: true
    },
    {
      name: 'reason',
      description: 'Reason for kick',
      type: 'STRING',
      required: false
    }
  ],
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const reason = interaction.options.getString('reason') || 'No reason provided';
    
    try {
      await interaction.guild.members.kick(user, reason);
      await interaction.reply(`✅ ${user.tag} has been kicked. Reason: ${reason}`);
    } catch (error) {
      await interaction.reply(`❌ Error kicking user: ${error.message}`);
    }
  }
};