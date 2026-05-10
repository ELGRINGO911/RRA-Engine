// Set Prefix Command
const Guild = require('../../models/Guild');

module.exports = {
  name: 'setprefix',
  description: 'Set the bot prefix for this server',
  options: [
    {
      name: 'prefix',
      description: 'New prefix',
      type: 'STRING',
      required: true
    }
  ],
  async execute(interaction) {
    if (!interaction.member.permissions.has('ADMINISTRATOR')) {
      return await interaction.reply('❌ You need Administrator permissions!');
    }
    
    const newPrefix = interaction.options.getString('prefix');
    
    try {
      await Guild.findOneAndUpdate(
        { guildId: interaction.guild.id },
        { prefix: newPrefix },
        { upsert: true }
      );
      
      await interaction.reply(`✅ Prefix changed to: \`${newPrefix}\``);
    } catch (error) {
      await interaction.reply(`❌ Error: ${error.message}`);
    }
  }
};