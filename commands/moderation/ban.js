/* eslint-disable no-empty */
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: "ban",
	description: "Ban command",

	async run(client, message, args) {
		if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("You can't use this command!");

		const mentionMember = message.mentions.members.first();
		let reason = args.slice(1).join(" ");
		if (!reason) reason = "no reason";

		if (!args[0]) return message.channel.send("You need to specify a user to ban.");

		if (!mentionMember) return message.channel.send("This user is not a valid user / is no-longer in the server!");

		if (!mentionMember.bannable) return message.channel.send("I was unable to ban this user due to role hierarchy.");


		try {
			await mentionMember.ban();
			const guildKick = new MessageEmbed()
			    .setTitle('<:ulobSuccess:894937662497128488> *${mentionMember.user.tag} was kicked*')
				.addField('Reason:', `${reason}`)
				.setTimestamp()
				.setColor('#43B581')
				
			message.channel.send({ embeds: [guildKick] });
		}
		catch (err) {
			message.channel.send(`An error had occured: ${err}`);
		}
	},
};