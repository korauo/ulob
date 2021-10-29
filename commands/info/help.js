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
			// no args
			const noArgs = new MessageEmbed()
				.setTitle('ulob')
				.setColor('#41A2D5')
				.addField('Moderation', '```u!help moderation```', true)
				.addField('Information', '```u!help information```', true)
				.addField('Fun', '```u!help fun```', true);
			return message.channel.send({ embeds: [noArgs] });
		}
		// args = mod
		else if (args[0] === 'mod') {
			const modEmbed = new MessageEmbed()
				.setColor(0xFF6663)
				.setTitle('<:534908853201:894270297723797554> Moderation')
				.addField('`u!ban`', 'Ban a member.')
				.addField('`u!kick`', 'Kick a member.')
				.addField('`u!warn`', 'Warn a member.')
				.addField('`u!mute`', 'Mute a member so they cannot type or speak.')
				.addField('`u!purge`', 'Delete a number of messages from a channel.')
				.addField('`u!lock`', 'Lock a channel with optional timer and message.')
				.addField('`u!lockend`', 'End lockdown of a channel');
			return message.channel.send({ embeds: [modEmbed] });
		}
		else if (args[0] === 'moderation') {
			// args = moderation
			const modEmbed = new MessageEmbed()
				.setColor(0xFF6663)
				.setTitle('<:534908853201:894270297723797554> Moderation')
				.addField('`u!ban`', 'Ban a member.')
				.addField('`u!kick`', 'Kick a member.')
				.addField('`u!warn`', 'Warn a member.')
				.addField('`u!mute`', 'Mute a member so they cannot type or speak.')
				.addField('`u!purge`', 'Delete a number of messages from a channel.')
				.addField('`u!lock`', 'Lock a channel with optional timer and message.')
				.addField('`u!lockend`', 'End lockdown of a channel');
			return message.channel.send({ embeds: [modEmbed] });
		}
		else if (args[0] === 'info') {
			// args = info
			const infoEmbed = new MessageEmbed()
				.setColor(0xFDFD97)
				.setTitle('<:382067908570:894270287720357948> Information')
				.addField('`u!ping`', 'Shows the bot\'s ping')
				.addField('`u!userinfo`', 'Tells you the info of an user')
				.addField('`u!serverinfo`', 'Tells you the info of a server');
			return message.channel.send({ embeds: [infoEmbed] });
		}
		else if (args[0] === 'information') {
			// args = information
			const infoEmbed = new MessageEmbed()
				.setColor(0xFDFD97)
				.setTitle('<:382067908570:894270287720357948> Information')
				.addField('`u!ping`', 'Shows the bot\'s ping')
				.addField('`u!userinfo`', 'Tells you the info of an user')
				.addField('`u!serverinfo`', 'Tells you the info of a server');
			return message.channel.send({ embeds: [infoEmbed] });
		}
	},
};

