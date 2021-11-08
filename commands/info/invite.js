const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'invite',
	aliases: ['inv', 'links'],
	description: 'Gives you an link to invite ulob to your server.',
	/**
    * @param {Client} client
    * @param {Message} message
    * @param {String[]} args
    */
	run: async (client, message) => {
		const embed = new MessageEmbed()
			.setTitle('<:ulob_blue_circle:905784602403172393> ulob')
			.addField('<:invitelink:902097960643493908> Invite link', '[<:redirect2:903511515234189312> Click Here](https://discord.com/oauth2/authorize?client_id=893037327440568371&permissions=8&scope=bot%20applications.commands)', true)
			.addField('<:892086242097:894246879427199027> Source Code', '[<:redirect2:903511515234189312> Click Here](https://github.com/korauo/ulob)', true)
			.addField('<:960207583948:894529757658632222> Documentation', '[<:redirect2:903511515234189312> Click Here](https://korauo.github.io/ulob/)', true)
			.setColor('#212224')
			.setThumbnail('https://i.imgur.com/GFkTVqJ.png')
			.setTimestamp()
			.setFooter(`${message.author.username}`,
				message.author.displayAvatarURL({
					dynamic: true,
				}),
			);

		message.channel.send({ embeds: [embed] });
	},
};