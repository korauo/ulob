/* eslint-disable no-unused-vars */
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
	name: "ping",
	description: 'Returns ping',
	permissions: ["SEND_MESSAGES"],
	/**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
	run: async (client, interaction) => {
		const embed = new MessageEmbed()
			.setTitle('Ping')
			.addField(`<:432499879844:894247293350477844> ${client.ws.ping}ms`, '<:037989972582:894264223763406908> ')
			.setColor('#2F3136')
			.setFooter(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }))
			.setTimestamp();
		interaction.followUp({ embeds: [embed] });
	},
};