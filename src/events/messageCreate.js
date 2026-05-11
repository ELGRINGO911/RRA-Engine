const { analyzeMessage } = require('../utils/aiEngine');

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        if (message.author.bot) return;

        // --- IA ANTI-TOXICIDAD ---
        const analysis = analyzeMessage(message.content);
        if (analysis.isToxic) {
            await message.delete();
            return message.channel.send(`${message.author}, mantén el respeto. (Detección IA 🚨)`);
        }

        // --- SISTEMA DE NIVELES (Lógica Simple) ---
        // Aquí podrías añadir un modelo de XP en MongoDB
        // console.log(`Usuario ${message.author.tag} ganó 10 XP`);

        // --- MANEJADOR DE COMANDOS ! ---
        if (!message.content.startsWith('!')) return;
        // ... (resto de lógica de comandos)
    }
};
