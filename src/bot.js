require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const mongoose = require('mongoose');
const express = require('express');
const fs = require('fs');
const path = require('path');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

// Mantener vivo en Render
const app = express();
app.get('/', (req, res) => res.send('RRA Engine Online 🚀'));
app.listen(10000); 

// Colecciones
client.commands = new Collection();

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Conectado a MongoDB Atlas'))
    .catch((err) => console.error('❌ Error Mongo:', err));

// Cargar comandos (Simplificado para empezar)
const commandsPath = path.join(__dirname, 'commands/tickets');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(path.join(commandsPath, file));
    client.commands.set(command.name, command);
}

// Escuchar mensajes
client.on('messageCreate', async message => {
    if (!message.content.startsWith('!') || message.author.bot) return;
    const args = message.content.slice(1).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (!command) return;

    try {
        await command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('¡Hubo un error al ejecutar ese comando!');
    }
});

client.once('ready', () => {
    console.log(`🤖 RRA Engine listo como ${client.user.tag}`);
});

client.login(process.env.TOKEN);
