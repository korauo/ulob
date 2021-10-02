/* eslint-disable no-unused-vars */
const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
	name: "help",
	/**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
	run: async (client, interaction) => {
		const newEmbed = new MessageEmbed()
			.setColor('#CCA383')
			.setTitle('Texture Pack Commands')
			.setURL('https://dsc.gg/packs')
			.setDescription('bruh')
			.setImage('https://cdn.discordapp.com/avatars/893037327440568371/e2fce81f5b26bc463a0f9d5f46cb05d4.png?size=80');
		interaction.followUp({ embeds: [newEmbed] });
	},
};
// test