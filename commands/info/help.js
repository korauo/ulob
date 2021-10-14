const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "help",
	aliases: ['commands'],
	/**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
	run: async (client, message, args) => {
		if (!args[0]) {
			return message.reply('**Execute the command again, but specify a number with it.**\n*Available options: `u!help 1`,`u!help 2`,`u!help 3`.*');
		}
		if (args[0] == '1') {

			const embed1 = new MessageEmbed()
				.setColor(0x9EC1CF)
				.setThumbnail('https://cdn.glitch.com/5ee62511-cbe6-4d98-bdfe-7a864d14ebca%2Fimage-modified.png?v=1633071650894')
				.setTitle('<:511795868583:894273449231532063> Bot Information')
				.addField('<:746738823901:894246879460741120> **Prefix**', 'Bots prefix is: `u!`')
				.addField('<:892086242097:894246879427199027> Source', 'https://github.com/korauo/ulob')
				.addField('<:960207583948:894529757658632222> **Pages**', '`1. Bot Information` `2. Moderation` `3. Information`');
			message.channel.send({ embeds: [embed1] });
		}
		if (args[0] === '2') {
			const embed2 = new MessageEmbed()
				.setColor(0xFF6663)
				.setTitle('<:534908853201:894270297723797554> Moderation')
				.addField('`u!ban`', 'Ban a member.')
				.addField('`u!unban`', 'Unban a member.')
				.addField('`u!kick`', 'Kick a member.')
				.addField('`u!warn`', 'Warn a member.')
				.addField('`u!mute`', 'Mute a member so they cannot type or speak.')
				.addField('`u!purge`', 'Delete a number of messages from a channel.')
				.addField('`u!lock`', 'Lock a channel with optional timer and message.')
				.addField('`u!lockend`', 'End lockdown of a channel');
			return message.channel.send({ embeds: [embed2] });
		}

		if (args[0] === '3') {

			const embed3 = new MessageEmbed()
				.setColor(0xFDFD97)
				.setTitle('<:382067908570:894270287720357948> Information')
				.addField('`u!ping`', 'Shows the bot\'s ping')
				.addField('`u!userinfo`', 'Tells you the info of an user')
				.addField('`u!serverinfo`', 'Tells you the info of a server');
			return message.channel.send({ embeds: [embed3] });
		}


	},
};

