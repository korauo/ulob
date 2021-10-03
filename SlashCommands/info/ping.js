/* eslint-disable no-unused-vars */
const { Client, MessageEmbed, User } = require("discord.js");

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
		const embed = new MessageEmbed()
			.setAuthor(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }))
			.addField('Ping', `${client.ws.ping}ms`)
			.setColor('RANDOM')
			.setTimestamp();
		interaction.followUp({ embeds: [embed] });
	},
};