/* eslint-disable no-empty */
const Discord = require('discord.js');

module.exports = {
	name: "kick",
	description: "kick command",

	async run(bot, message, args) {
		if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You cant use this command!");

		const mentionMember = message.mentions.members.first();
		let reason = args.slice(1).join(" ");
		if (!reason) reason = "No reason given";

		const kickembed = new Discord.MessageEmbed()
			.setTitle(`You were kicked from **${message.guild.name}**`)
			.setDescription(`Reason: ${reason}`)
			.setColor("RANDOM")
			.setTimestamp()
			.setFooter(bot.user.tag, bot.user.displayAvatarURL());

		if (!args[0]) return message.channel.send("You need to specify a user to kick");

		if (!mentionMember) return message.channel.send("This user is not a valid user / is no-longer in the server!");

		if (!mentionMember.kickable) return message.channel.send("I was unable to kick this user!");


		try {
			await mentionMember.send(kickembed);
		}
		catch (err) {

		}

		try {
			await mentionMember.kick(reason);
		}
		catch (err) {
			return message.channel.send("I was unabe to kick this user! Sorry...");
		}
	},
};