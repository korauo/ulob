/* eslint-disable no-empty */
const { MessageEmbed, User, Guild } = require('discord.js');

module.exports = {
	name: "kick",
	description: "kick command",

	async run(client, message, args) {
		if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("You can't use this command!");

		const mentionMember = message.mentions.members.first();
		let reason = args.slice(1).join(" ");
		if (!reason) reason = "no reason";

		if (!args[0]) return message.channel.send("You need to specify a user to kick");

		if (!mentionMember) return message.channel.send("This user is not a valid user / is no-longer in the server!");

		if (!mentionMember.kickable) return message.channel.send("I was unable to kick this user!");


		try {
			message.channel.send('Sucessfully kicked the user.');
		}
		catch (err) {

		}

		try {
			await mentionMember.kick(reason);
			const guildKick = new MessageEmbed()
				.setAuthor(`Kick in ${message.guild}`, message.guild.IconURL({ dynamic: true }))
				.setDescription(`${message.author} successfully kicked ${mentionMember} for ${reason}.`)
				.setTimestamp()
				.setColor('DARK_RED')
				.setFooter(User.username + User.discriminator, User.avatar);
			message.channel.send({ embeds: [guildKick] });
		}
		catch (err) {
			return message.channel.send(`An error occured: ${err}`);
		}
	},
};