// Warn Command - Warn a user
const User = require('../../models/User');
const { createWarningEmbed } = require('../../utils/embedBuilder');

module.exports = {
  name: 'warn',
  description: 'Warn a user',
  options: [
    {
      name: 'user',
      description: 'User to warn',
      type: 'USER',
      required: true
    },
    {
      name: 'reason',
      description: 'Reason for warning',
      type: 'STRING',
      required: true
    }
  ],
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const reason = interaction.options.getString('reason');
    
    try {
      const dbUser = await User.findOneAndUpdate(
        { userId: user.id },
        { $inc: { warnings: 1 } },
        { upsert: true, new: true }
      );
      
      const embed = createWarningEmbed('⚠️ User Warned', `${user.tag} has been warned. Reason: ${reason}`);
      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      await interaction.reply(`❌ Error: ${error.message}`);
    }
  }
};