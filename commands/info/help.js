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
		// no args || u!help
		if (!args[0]) {
			const noArgs = new MessageEmbed()
			.setTitle('ulob')
			.setDescription('***The ~~basic~~ discord moderation bot.***')
			.setColor('#41A2D5')
			.addField('<:moderation:903699551020531782> Moderation <:reply1:903696466835554305> ', '\`\`\`u!help moderation\`\`\`', true)
			.addField('<:information:903700248319373343> Information <:reply1:903696466835554305> ', '\`\`\`u!help information\`\`\`', true)
			.addField('<:fun:903698982662995989> Fun <:reply1:903696466835554305> ', '\`\`\`u!help fun\`\`\`', true)
			.addField('<:music:903621242567942204> Music <:reply1:903696466835554305> ', '\`\`\`u!help music\`\`\`', true)
			.addField('<:utility:903695472533835839> Utility <:reply1:903696466835554305> ', '\`\`\`u!help utility\`\`\`', true)
			.addField('<:voice:903697198276046898> Voice <:reply1:903696466835554305> ', '\`\`\`u!help voice\`\`\`', true)
			.setURL('https://discord.com/oauth2/authorize?client_id=893037327440568371&permissions=8&scope=bot%20applications.commands');
			return message.channel.send({ embeds: [noArgs] });
		}
		// args = mod || u!help mod
		else if (args[0] === 'mod') {
			const modEmbed = new MessageEmbed()
			.setColor('#ED4245')
			.setTitle('<:moderation:903699551020531782> Moderation')
			.addField('`u!ban` <:reply1:903696466835554305>', 'Ban a member.')
			.addField('`u!kick` <:reply1:903696466835554305>', 'Kick a member.')
			.addField('`u!warn` <:reply1:903696466835554305>', 'Warn a member.')
			.addField('`u!mute` <:reply1:903696466835554305>', 'Mute a member so they cannot type or speak.')
			.addField('`u!purge` <:reply1:903696466835554305>', 'Delete a number of messages from a channel.')
			.addField('`u!lock` <:reply1:903696466835554305>', 'Lock a channel with optional timer and message.')
			.addField('`u!lockend` <:reply1:903696466835554305>', 'End lockdown of a channel');
			return message.channel.send({ embeds: [modEmbed] });
		}
        // args = moderation || u!help moderation
		else if (args[0] === 'moderation') {
			const modEmbed = new MessageEmbed()
			.setColor('#ED4245')
			.setTitle('<:moderation:903699551020531782> Moderation')
			.addField('`u!ban` <:reply1:903696466835554305>', 'Ban a member.')
			.addField('`u!kick` <:reply1:903696466835554305>', 'Kick a member.')
			.addField('`u!warn` <:reply1:903696466835554305>', 'Warn a member.')
			.addField('`u!mute` <:reply1:903696466835554305>', 'Mute a member so they cannot type or speak.')
			.addField('`u!purge` <:reply1:903696466835554305>', 'Delete a number of messages from a channel.')
			.addField('`u!lock` <:reply1:903696466835554305>', 'Lock a channel with optional timer and message.')
			.addField('`u!lockend` <:reply1:903696466835554305>', 'End lockdown of a channel');
			return message.channel.send({ embeds: [modEmbed] });
		}
        // args = info || u!help info
		else if (args[0] === 'info') {
			const infoEmbed = new MessageEmbed()
				.setColor('0xFDFD97')
				.setTitle('<:information:903700248319373343> Information')
				.addField('`u!stats`<:reply1:903696466835554305>', 'Shows the ulob\`s statistics')
				.addField('`u!ping` <:reply1:903696466835554305>', 'Shows the ulob\'s ping')
				.addField('`u!userinfo` <:reply1:903696466835554305>', 'Tells you the info of an user')
				.addField('`u!serverinfo` <:reply1:903696466835554305>', 'Tells you the info of a server');
			return message.channel.send({ embeds: [infoEmbed] });
		}
        // args = information || u!help information
		else if (args[0] === 'information') {
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