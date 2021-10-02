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
			.setColor('#41A2D5')
			.setTitle('Prefix - `!`')
			.setThumbnail('https://i.imgur.com/Nm1fOf2.png')
			.addField(':shield: Moderation', '`ban` | `unban` | `kick` | `warn` | `mute` | `purge` | `lock` | `lockend`')
			.addField(':scroll: Information' `ping` | `userinfo` | `serverinfo`);
		message.channel.send({ embeds: [newEmbed] });
	},
};

