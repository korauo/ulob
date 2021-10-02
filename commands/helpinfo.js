/* eslint-disable no-unused-vars */
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
	name: "helpp",
	/**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
	async run(bot, message, args) {

		const BotInfo = new Discord.MessageEmbed()
			.setColor(0x9EC1CF)
			.setTitle('Bot Information')
			.addField('**Prefix**', 'Bots prefix is: `!`')
			.addField('**Pages**', '`1. Bot Information`, `2. Moderation`, `3. Information`')
			.addField('**Navigation Help**', 'Use the arrows below to look through the pages!');

		const Moderation = new Discord.MessageEmbed()
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

		const Information = new Discord.MessageEmbed()
			.setColor(0xFDFD97)
			.setTitle('Information')
			.addField('`!ping`', 'Ask it a question and it will respond.....')
			.addField('`!userinfo`', 'Tells you the info of an user')
			.addField('`!serverinfo`', 'Tells you the info of a server');

		const pages = [
			BotInfo,
			Moderation,
			Information,
		];

		const emojiList = ["⏪", "⏩"];

		const timeout = '600000';

		pagination(message, pages, emojiList, timeout);
	},
};