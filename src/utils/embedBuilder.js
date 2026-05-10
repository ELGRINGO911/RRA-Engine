// Embed Builder Utility
const { EmbedBuilder } = require('discord.js');
const config = require('../config');

// Create a success embed
function createSuccessEmbed(title, description) {
  return new EmbedBuilder()
    .setColor(config.colors.success)
    .setTitle(title)
    .setDescription(description)
    .setTimestamp();
}

// Create an error embed
function createErrorEmbed(title, description) {
  return new EmbedBuilder()
    .setColor(config.colors.error)
    .setTitle(title)
    .setDescription(description)
    .setTimestamp();
}

// Create an info embed
function createInfoEmbed(title, description) {
  return new EmbedBuilder()
    .setColor(config.colors.info)
    .setTitle(title)
    .setDescription(description)
    .setTimestamp();
}

// Create a warning embed
function createWarningEmbed(title, description) {
  return new EmbedBuilder()
    .setColor(config.colors.warning)
    .setTitle(title)
    .setDescription(description)
    .setTimestamp();
}

module.exports = {
  createSuccessEmbed,
  createErrorEmbed,
  createInfoEmbed,
  createWarningEmbed
};