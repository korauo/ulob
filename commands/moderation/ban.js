const Discord = require('discord.js');

module.exports = {
	name: "ban",
	description: "ban command",

	async run(client, message, args) {
		if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("You cant use this command!");

		const mentionMember = message.mentions.members.first();
		let reason = args.slice(1).join(" ");
		if (!reason) reason = "no reason";

		const embed = new Discord.MessageEmbed()
			.setTitle(`You were banned from **${message.guild.name}**`)
			.setDescription(`Reason: ${reason}`)
			.setColor("RANDOM")
			.setTimestamp()
			.setFooter(client.user.tag, client.user.displayAvatarURL());

		if (!args[0]) return message.channel.send("You need to specify a user to ban.");

		if (!mentionMember) return message.channel.send("This user is not a valid user / is no-longer in the server.");

		if (!mentionMember.bannable) return message.channel.send("I was unable to ban this user.");

		await mentionMember.send(embed);
		await mentionMember.ban({
			reason: reason,
		}).then(() => message.channel.send("Successfully banned: " + mentionMember.user.tag));
	},
};