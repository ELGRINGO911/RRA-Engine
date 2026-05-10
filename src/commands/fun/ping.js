// Ping Command

module.exports = {
  name: 'ping',
  description: 'Check bot latency',
  async execute(interaction) {
    const ping = interaction.client.ws.ping;
    await interaction.reply(`🏓 Pong! Latency: ${ping}ms`);
  }
};