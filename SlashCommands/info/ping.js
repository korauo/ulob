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
			.addField('Ping', `<:432499879844:894247293350477844>${client.ws.ping}ms`)
			.setTimestamp();
		interaction.followUp({ embeds: [embed] });
	},
};