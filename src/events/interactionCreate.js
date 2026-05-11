const { InteractionType, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const Ticket = require('../models/ticketSchema');

module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        // 1. Manejar el Menú Desplegable (Abrir Modales)
        if (interaction.isStringSelectMenu() && interaction.customId === 'support_menu') {
            const modal = new ModalBuilder()
                .setCustomId(`modal_${interaction.values[0]}`)
                .setTitle('Detalles de la Solicitud');

            const input = new TextInputBuilder()
                .setCustomId('user_reason')
                .setLabel("¿Cuál es el motivo de tu consulta?")
                .setStyle(TextInputStyle.Paragraph)
                .setRequired(true);

            modal.addComponents(new ActionRowBuilder().addComponents(input));
            await interaction.showModal(modal);
        }

        // 2. Manejar el envío del Modal (Crear el Ticket)
        if (interaction.type === InteractionType.ModalSubmit) {
            const reason = interaction.fields.getTextInputValue('user_reason');
            const channel = await interaction.guild.channels.create({
                name: `ticket-${interaction.user.username}`,
                type: 0, // GuildText
                permissionOverwrites: [
                    { id: interaction.guild.id, deny: ['ViewChannel'] },
                    { id: interaction.user.id, allow: ['ViewChannel', 'SendMessages'], deny: ['SendMessages'] }, // Bloqueado al inicio
                ],
            });

            const embed = new EmbedBuilder()
                .setTitle("👋 BIENVENIDO AL TICKET")
                .setDescription(`Hola ${interaction.user}, gracias por contactar.\n\n**Motivo:** ${reason}\n\n*Esperando que un STAFF reclame este ticket...*`)
                .setColor("#2b2d31");

            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder().setCustomId('claim_ticket').setLabel('👋 Reclamar Ticket').setStyle(ButtonStyle.Secondary),
                new ButtonBuilder().setCustomId('close_ticket').setLabel('✖ Cerrar').setStyle(ButtonStyle.Primary)
            );

            await channel.send({ embeds: [embed], components: [row] });
            await interaction.reply({ content: `Ticket creado en ${channel}`, ephemeral: true });

            // Guardar en Base de Datos
            await Ticket.create({
                guildId: interaction.guild.id,
                userId: interaction.user.id,
                channelId: channel.id,
                type: interaction.customId
            });
        }

        // 3. Manejar Botones (Reclamar / Cerrar)
        if (interaction.isButton()) {
            if (interaction.customId === 'claim_ticket') {
                // Lógica de reclamar: desbloquear chat para el usuario y staff
                await interaction.channel.permissionOverwrites.edit(interaction.user.id, { SendMessages: true });
                await interaction.reply({ content: `✅ Ticket reclamado por ${interaction.user}`, ephemeral: false });
            }
        }
    }
};
