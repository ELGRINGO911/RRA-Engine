// Rank Command - Show user level
const User = require('../../models/User');

module.exports = {
  name: 'rank',
  description: 'Show your level and experience',
  async execute(interaction) {
    try {
      const user = await User.findOne({ userId: interaction.user.id });
      if (!user) {
        return await interaction.reply('📊 You don\'t have any level yet!');
      }
      
      await interaction.reply(`📊 **Rank:** Level ${user.level}\n📈 **Experience:** ${user.experience} XP\n💰 **Balance:** ${user.balance}`);
    } catch (error) {
      await interaction.reply(`❌ Error: ${error.message}`);
    }
  }
};