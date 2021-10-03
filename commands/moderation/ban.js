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
				.setAuthor(`Kick in ${message.guild}`)
				.setDescription(`${message.author} successfully kicked ${mentionMember} for ${reason}.`)
				.setTimestamp()
				.setColor('DARK_RED')
				.setFooter(`Requested by ${message.author.tag}`,
					message.author.displayAvatarURL({
						dynamic: true,
					}),
				);
			message.channel.send({ embeds: [guildKick] });
		}
		catch (err) {
			message.channel.send(`An error had occured: ${err}`);
		}
	},
};