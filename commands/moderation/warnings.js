/* eslint-disable no-empty */
const { MessageEmbed } = require('discord.js');
const warndb = require('../../models/warndb');

module.exports = {
	name: 'warnings',
	aliases: ['warns'],
	/**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
	run: async (client, message) => {

		if (!message.member.permissions.has("MANAGE_MESSAGES")) {

			const noPerms = new MessageEmbed()

				.setTitle('<:ulobError:894937662518091776> You cannot use this command!')
				.setColor('#F04947')
				.setTimestamp();

			return message.channel.send({ embeds: [noPerms] });
		}

		const user = message.mentions.members.first() || message.author.id;

		warndb.findOne({
			guild: message.guild.id,
			user: user.id,
		}, async (err, data) => {
			if (err) throw err;
			if (data) {
				const e = data.content.map(
					(w, i) => `\n\`${i + 1}\` - Moderator: ${message.guild.members.cache.get(w.moderator).user.tag}, Reason: ${w.reason}`,
				);
				const embed = new MessageEmbed()
					.setDescription(e.join(' '))
					.setColor('#43B581');
				message.channel.send({
					embeds: [embed],
				});
			}
			else {

				const noWarns = new MessageEmbed()
					.setTitle('<:ulobError:894937662518091776> This user does not have any warnings.')
					.setColor('#F04947')
					.setTimestamp();

				message.channel.send({ embeds: [noWarns] });
			}
		});

	},
};