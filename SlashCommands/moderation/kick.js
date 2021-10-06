/* eslint-disable no-unused-vars */
const { Message, MessageEmbed, Interaction, User } = require("discord.js");

module.exports = {
	name: 'kick',
	description: 'Kick the mentioned member.',
	userPermissions: ['KICK_MEMBERS'],
	options: [
		{
			name: 'target',
			description: 'target Member to kick:',
			type: 'USER',
			required: true,
		},
		{
			name: 'reason',
			description: 'reason for this kick:',
			type: 'STRING',
			required: false,
		},
	],

	/**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
	run: async (client, interaction) => {
		// Fetching target from the slash command
		const target = interaction.options.getMember('target');

		// What the reason is
		const reason = interaction.options.getString('reason') || "No Reason provided";

		if (!interaction.member.permissions.has("KICK_MEMBERS")) {

			const noPerms = new MessageEmbed()

				.setTitle('<:ulobError:894937662518091776> You cannot use this command!')
				.setColor('#F04947')
				.setTimestamp();

			return interaction.followUp({ embeds: [noPerms] });
		}


		// Prevent role hierarchy abuse
		if (target.roles.highest.postion >= interaction.member.roles.highest.position) {

			const roleHierarchy = new MessageEmbed()
				.setTitle('<:ulobError:894937662518091776> You can\'t take action on this user as their role is higher than yours.')
				.setColor('#F04947')
				.setFooter(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }))
				.setTimestamp();

			return interaction.followUp({ embeds: [roleHierarchy] });
		}

		// kickMessage to be DMed to the victim who got kicked
		const kickMessage = new MessageEmbed()
			.setColor('#F04947')
			.setTitle(`You have been kicked from ${interaction.guild.name}`)
			.addField('Reason:', `${reason}`)
			.setFooter(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }))
			.setTimestamp();

		// Try to send the target kickMessage, if not, return an interaction saying it was not able to DM target on the guild channel.
		try {
			target.send({ embeds: [kickMessage] });
		}
		catch (error) {
			return interaction.followUp({ content: `I wasn't able to DM ${target}.` });
		}

		// Try to kick the target, if not send the interaction.followUp saying that it was unable to kick the user.
		try {
			target.kick(reason);
		}
		catch (error) {
			return interaction.followUp({ content: `I was unable to kick the user. Error: ${error}` });
		}

		// Embed to be sent after the kick has been succesful. (on the guild)
		const kickReturn = new MessageEmbed()
			.setColor('#43B581')
			.setTitle(`<:ulobSuccess:894937662497128488> *${target.user.tag} was kicked*`)
			.addField('Reason:', `${reason}`)
			.setTimestamp();

		interaction.followUp({ embeds: [kickReturn] });

	},
};