/* eslint-disable no-unused-vars */
const { Message, MessageEmbed, Interaction, User } = require("discord.js");

module.exports = {
	name: 'ban',
	description: 'Ban the mentioned member.',
	permissions: ['BAN_MEMBERS'],
	options: [
		{
			name: 'target',
			description: 'Target Member to ban:',
			type: 'USER',
			required: true,
		},
		{
			name: 'reason',
			description: 'Reason for this ban:',
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
		const reason = interaction.options.getString('reason') || "No Reason was provided.";

		if (!interaction.member.permissions.has("BAN_MEMBERS")) {

			const noPerms = new MessageEmbed()

				.setTitle('<:ulobError:894937662518091776> You cannot use this command!')
				.setColor('#F04947')
				.setTimestamp('');

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
		const banDmMessage = new MessageEmbed()
			.setColor('#F04947')
			.setTitle(`You have been banned from ${interaction.guild.name}`)
			.addField('Reason:', `${reason}`)
			.setTimestamp();

		// Try to send the target kickMessage, if not, return an interaction saying it was not able to DM target on the guild channel.
		try {
			target.send({ embeds: [banDmMessage] });
		}
		catch (error) {
			console.log(error);
		}

		// Try to kick the target. If not, send the interaction.followUp saying that it was unable to kick the user.
		try {
			target.ban({ reason });
		}
		catch (error) {
			return interaction.followUp({ content: `<:ulobError:894937662518091776> I was unable to ban the user. Error: ${error}` });
		}

		// Embed to be sent after the kick has been successful. (on the guild)
		const kickReturn = new MessageEmbed()
			.setColor('#43B581')
			.setTitle(`<:ulobSuccess:894937662497128488> *${target.user.tag} was banned*`)
			.addField('Reason:', `${reason}`)
			.setTimestamp();

		interaction.followUp({ embeds: [kickReturn] });

	},
};