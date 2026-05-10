// Ban Command

module.exports = {
  name: 'ban',
  description: 'Ban a user from the server',
  options: [
    {
      name: 'user',
      description: 'User to ban',
      type: 'USER',
      required: true
    },
    {
      name: 'reason',
      description: 'Reason for ban',
      type: 'STRING',
      required: false
    }
  ],
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const reason = interaction.options.getString('reason') || 'No reason provided';
    
    try {
      await interaction.guild.members.ban(user, { reason });
      await interaction.reply(`✅ ${user.tag} has been banned. Reason: ${reason}`);
    } catch (error) {
      await interaction.reply(`❌ Error banning user: ${error.message}`);
    }
  }
};