// Ready Event - Bot Startup

module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`✅ Bot logged in as ${client.user.tag}`);
    client.user.setActivity('RRA-Engine v1.0', { type: 'WATCHING' });
  }
};