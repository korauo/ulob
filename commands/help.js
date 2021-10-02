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
	run: async (client, message, interaction) => {
		const newEmbed = new MessageEmbed()
			.setColor('#41A2D5')
			.setTitle('Prefix - `!`')
			.setAuthor('Command List', message.author.displayAvatarURL())
			.setThumbnail('https://i.imgur.com/Nm1fOf2.png')

			.addFields({
				name: ':shield: Moderation',
				value: '`ban` | `unban` | `kick` | `warn` | `mute` | `purge` | `lock` | `lockend`',
			},
			{
				name: ':scroll: Information',
				value: '`ping` | `userinfo` | `serverinfo`',
			});
		message.channel.send({ embeds: [newEmbed] });
	},
};

