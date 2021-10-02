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
					name: 'Bot info',
					value: 'bot-info',
				},
				{
					name: 'Moderation',
					value: 'moderation',
				},
				{
					name: 'Info',
					value: 'info',
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
		if (category === 'bot-info') {
			const infoEmbed = new MessageEmbed()
				.setColor(0x9EC1CF)
				.setTitle('Bot Information')
				.addField('**Prefix**', 'Bots prefix is: `!`')
				.addField('**Pages**', '`1. Bot Information`, `2. Moderation`, `3. Information`');
			return interaction.followUp({ embeds: [infoEmbed] });
		}
		// moderation string
		if (category === 'moderation') {
			const modEmbed = new MessageEmbed()
				.setColor(0xFF6663)
				.setTitle('Moderation')
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
		if (category === 'info') {
			const infoEmbed = new MessageEmbed()
				.setColor(0xFDFD97)
				.setTitle('Information')
				.addField('`!ping`', 'Ask it a question and it will respond.....')
				.addField('`!userinfo`', 'Tells you the info of an user')
				.addField('`!serverinfo`', 'Tells you the info of a server');
			return interaction.followUp({ embeds: [infoEmbed] });
		}

	},
};