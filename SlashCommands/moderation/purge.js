/* eslint-disable no-unused-vars */
const ms = require("ms");
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'purge',
	description: 'Delete a number of messages from a channel.',
	permissions: ["MANAGE_MESSAGES"],
	options: [
		{
			name: 'amount',
			description: 'Amount of messages which is gonna be deleted',
			type: 'INTEGER',
			required: true,
		},
	],

	run: async (client, interaction) => {

		if (!interaction.member.permissions.has("MANAGE_MESSAGES")) {

			const noPerms = new MessageEmbed()

				.setTitle('<:ulobError:894937662518091776> You cannot use this command!')
				.setColor('#F04947')
				.setTimestamp();

			return interaction.followUp({ embeds: [noPerms] });
		}

		const amount = interaction.options.getInteger('amount');

		if (amount > 500) {

			const purgeMax = new MessageEmbed()
				.setTitle('<:ulobError:894937662518091776> The maximum amount of messages you can delete is 500!')
				.setColor('#F04947')
				.setTimestamp();

			return interaction.followUp({ embeds: [purgeMax] });
		}

		const messages = await interaction.channel.messages.fetch({ limit: amount + 1,
		});

		const filtered = messages.filter((msg) => Date.now() - msg.createdTimestamp < ms("14 days"),
		);

		await interaction.channel.bulkDelete(filtered) ; {
			const deleteMessage = new MessageEmbed()
				.setTitle(`<:ulobSuccess:894937662497128488> Deleted ${filtered.size - 1} messages.`)
				.setColor('#43B581')
				.setTimestamp()

			interaction.channel.send({ embeds: [deleteMessage] });
		}
	},
};