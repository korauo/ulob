/* eslint-disable no-unused-vars */
const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
	name: "help",
	description: 'Get help',
	/**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
	run: async (client, interaction) => {
		const newEmbed = new MessageEmbed()
			.setColor('#CCA383')
			.setTitle('Texture Pack Commands')
			.setURL('https://dsc.gg/packs')
			.setDescription('bruh');
		interaction.followUp({ embeds: [newEmbed] });
	},
};