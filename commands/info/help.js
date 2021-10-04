/* eslint-disable no-unused-vars */
const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
	name: "help",
	/**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
	run: async (client, message, args) => {
		const newEmbed = new MessageEmbed()
			.setColor('#2F3136')
			.setTitle('Prefix - `!`')
			.addField('<:534908853201:894270297723797554> Moderation', '`ban` | `unban` | `kick` | `warn` | `mute` | `purge` | `lock` | `lockend`')
			.addField('<:382067908570:894270287720357948> Information', '`ping` | `userinfo` | `serverinfo`');
		message.channel.send({ embeds: [newEmbed] });
	},
};

