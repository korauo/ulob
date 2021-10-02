/* eslint-disable no-unused-vars */
const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
	name: "ping",
	description: 'Returns ping',
	/**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
	run: async (client, interaction) => {
		interaction.followUp({ content: `Pong! ${client.ws.ping}ms`, ephemeral: true });
	},
};