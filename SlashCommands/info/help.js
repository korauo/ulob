/* eslint-disable no-unused-vars */
const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
	name: "help",
	description: 'Get help',
	options: [
		{
			name: 'category',
			description: 'Choose the category',
			type: 'STRING',
			required: true,
			choices: [
				{
					name: 'Bot Information',
					value: 'bot-information',
				},
				{
					name: 'Moderation',
					value: 'moderation',
				},
				{
					name: 'Information',
					value: 'information',
				},
			],
		},
	],
	/**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
	run: async (client, interaction) => {
		const category = interaction.options.getString('category');
		// bot-info string
		if (category === 'bot-information') {
			const infoBotEmbed = new MessageEmbed()
				.setColor(0x9EC1CF)
				.setThumbnail('https://cdn.glitch.com/5ee62511-cbe6-4d98-bdfe-7a864d14ebca%2Fimage-modified.png?v=1633071650894')
				.setTitle('<:511795868583:894273449231532063> Bot Information')
				.addField('<:746738823901:894246879460741120> **Prefix**', 'Bots prefix is: `/`')
				.addField('<:892086242097:894246879427199027> Source', 'https://github.com/korauo/ulob')
				.addField('<:960207583948:894529757658632222> **Pages**', '`1. Bot Information` `2. Moderation` `3. Information`');
			return interaction.followUp({ embeds: [infoBotEmbed] });
		}
		// moderation string
		if (category === 'moderation') {
			const modEmbed = new MessageEmbed()
				.setColor(0xFF6663)
				.setTitle('<:534908853201:894270297723797554> Moderation')
				.addField('`!ban`', 'Ban a member.')
				.addField('`!unban`', 'Unban a member.')
				.addField('`!kick`', 'Kick a member.')
				.addField('`!warn`', 'Warn a member.')
				.addField('`!mute`', 'Mute a member so they cannot type or speak.')
				.addField('`!purge`', 'Delete a number of messages from a channel.')
				.addField('`!lock`', 'Lock a channel with optional timer and message.')
				.addField('`!lockend`', 'End lockdown of a channel');
			return interaction.followUp({ embeds: [modEmbed] });
		}
		// info string
		if (category === 'information') {
			const infoEmbed = new MessageEmbed()
				.setColor(0xFDFD97)
				.setTitle('<:382067908570:894270287720357948> Information')
				.addField('`!ping`', 'Ask it a question and it will respond.....')
				.addField('`!userinfo`', 'Tells you the info of an user')
				.addField('`!serverinfo`', 'Tells you the info of a server');
			return interaction.followUp({ embeds: [infoEmbed] });
		}

	},
};