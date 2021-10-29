/* eslint-disable no-unused-vars */
const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
	name: "ping",
	/**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
	run: async (client, message, interaction) => {

		const embed = new MessageEmbed()
			.setTitle(':ping_pong: Pong!')
			.addField(`<:432499879844:894247293350477844> ${client.ws.ping}ms`, '<:037989972582:894264223763406908>')
			.setColor('#2F3136')
			.setFooter(`${message.author.username}`,
				message.author.displayAvatarURL({
					dynamic: true,
				}),
			)
			.setTimestamp();

		message.channel.send({ embeds: [embed] });
	},
};