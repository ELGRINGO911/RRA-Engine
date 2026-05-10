// 8Ball Command - Magic 8 Ball Game

const responses = [
  '✅ Yes',
  '❌ No',
  '🤷 Maybe',
  '🎱 Ask again later',
  '📌 Definitely',
  '🚫 Don\'t count on it',
  '🎯 Signs point to yes',
  '❓ Reply hazy, try again'
];

module.exports = {
  name: '8ball',
  description: 'Magic 8 Ball',
  options: [
    {
      name: 'question',
      description: 'Ask a question',
      type: 'STRING',
      required: true
    }
  ],
  async execute(interaction) {
    const question = interaction.options.getString('question');
    const response = responses[Math.floor(Math.random() * responses.length)];
    await interaction.reply(`❓ **Question:** ${question}\n**Answer:** ${response}`);
  }
};