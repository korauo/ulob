const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
	name: "test",
	/**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
	run: async (client, message, interaction) => {
        if (message.author.id !== '852985778584944691')
        return message.channel.send("Hey! You can't use that.")

        const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .addFields(
            { name: '```Regular field title```', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addField('Inline field title', 'Some value here', true)
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

		message.channel.send({ embeds: [exampleEmbed] });
	},
};