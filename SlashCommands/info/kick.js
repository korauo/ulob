const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'kick',
	description: 'Kick the mentioned member.',
	userPermissions: ["KICK_MEMBERS"],
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
		const reason = interaction.options.getString('Reason') || "No Reason provided.";

		// Prevent role hierarchy abuse
		if (target.roles.highest.postion >= interaction.member.roles.highest.position) {

			const roleHierarchy = new MessageEmbed()
				.setTitle('<:589702039932:894246879657873428> Error')
				.addField('<:780897786969:894246879733358602>', 'You can\'t take action on this user as their role is higher than yours.')
				.setColor('#8b0000')
				.setFooter(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }))
				.setTimestamp();

			return interaction.followUp({ embeds: [roleHierarchy] });
		}

		// kickMessage to be DMed to the victim who got kicked
		const kickMessage = new MessageEmbed()
			.setColor('#FFAAA7')
			.addField(`You have been kicked from **${interaction.guild.name}**`, `reason: **${reason}**`)
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
			.setColor('#D5ECC2')
			.setFields(`<:965555212854:894246879360090143> Kicked **${target.user.tag}** successfully! Reason: **${reason}**`)
			.setTimestamp()
			.setFooter(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }));
		interaction.followUp({ embeds: [kickReturn] });

	},
};