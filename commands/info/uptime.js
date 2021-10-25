/* eslint-disable no-unused-vars */
const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
	name: "uptime",
    aliases: ['up'],
	/**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
	run: async (client, message, interaction) => {

          let days = Math.floor(client.uptime / 86400000);
          let hours = Math.floor(client.uptime / 3600000) % 24;
          let minutes = Math.floor(client.uptime / 60000) % 60;
          let seconds = Math.floor(client.uptime / 1000) % 60;

          const embed = new MessageEmbed()
          .setTitle('<:uptime:902087515652100107> Uptime')
          .addField(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`, '<:037989972582:894264223763406908>')
          .setColor('#2F3136')
          .setFooter(`${message.author.username}`,
          message.author.displayAvatarURL({
               dynamic: true,
          }),
     )
          .setTimestamp();

		message.channel.send({ embeds: [embed] });
	},
};