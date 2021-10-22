/* eslint-disable no-empty */
const { MessageEmbed } = require('discord.js');
const { chalk } = require('chalk');

module.exports = {
	name: "ban",
	description: "Ban command",

	async run(client, message, args) {
        if (!message.member.permissions.has("BAN_MEMBERS")) {

            const noPerms = new MessageEmbed()

                .setTitle('<:ulobError:894937662518091776> You cannot use this command!')
                .setColor('#F04947')
                .setTimestamp();

            return message.channel.send({ embeds: [noPerms] });
        }

		const mentionMember = message.mentions.members.first();
		let reason = args.slice(1).join(" ");
		if (!reason) reason = "Reason wasn't provided.";

		if (!args[0]) {
			const specifyUser = new MessageEmbed()
			.setTitle('<:ulobError:894937662518091776> You need to specify a user to ban.')
			.setColor('#F04947')
			.setTimestamp();

			return message.channel.send({ embeds: [specifyUser] })
		} 

		if (!mentionMember) {
			const invalidUser = new MessageEmbed()
			.setTitle('<:ulobError:894937662518091776> This user is not a valid user / is no-longer in the server!')
			.setColor('#F04947')
			.setTimestamp();

			return message.channel.send({ embeds: [invalidUser] })
		}

		if (!mentionMember.bannable) {
			const roleHierarchy = new MessageEmbed()
			.setTitle('<:ulobError:894937662518091776> You can\'t take action on this user as their role is higher than yours.')
			.setColor('#F04947')
			.setTimestamp();

			return message.channel.send({ embeds: [roleHierarchy] })
		} 


		try {
			await mentionMember.ban();
			const guildKick = new MessageEmbed()
			    .setTitle(`<:ulobSuccess:894937662497128488> *${mentionMember.user.tag} was banned.*`)
				.addField('Reason:', `${reason}`)
				.setTimestamp()
				.setColor('#43B581');

			message.channel.send({ embeds: [guildKick] });
		}
		catch (error) {
			console.log(chalk.red(`An error occured from ban.js / u! commands. Error: ${error}`));
			message.channel.send(`An unknown error occured: ${error}`);
		}
	},
};