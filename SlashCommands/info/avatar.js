/* eslint-disable no-unused-vars */
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'avatar',
	description: 'Get the Avatar of the mentioned member',
	permissions: ['SEND_MESSAGES'],
	options: [{
		name: 'target',
		type: 'USER',
		description: 'Select a user',
		required: true,
	}],
	run: async (client, interaction) => {
		const user = interaction.options.getUser('target');

		const embed = new MessageEmbed()
			.setTitle(`${user.username}'s Avatar`)
			.setColor('#2F3136')
			.setImage(user.displayAvatarURL({
				dynamic: true,
				size: 1024,
			}))
			.setFooter(`Requested by ${interaction.user.username}`, interaction.user.displayAvatarURL({ dynamic: true }));

		await interaction.followUp({
			embeds: [embed],
		});
	},
};