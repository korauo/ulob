/* eslint-disable no-unused-vars */
const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
	name: "stats",
    aliases: ['uptime', 'about'],
	/**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
	run: async (client, message, interaction) => {

          let users = client.users.cache.size;
          let servers_count = message.client.guilds.cache.size;
          
              let totalSeconds = message.client.uptime / 1000;
              let days = Math.floor(totalSeconds / 86400);
              totalSeconds %= 86400;
              let hours = Math.floor(totalSeconds / 3600);
              totalSeconds %= 3600;
              let minutes = Math.floor(totalSeconds / 60);
              let seconds = Math.floor(totalSeconds % 60);
              
              let uptime = `\`\`\`${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds\`\`\``;

          const embed = new MessageEmbed()
          .setTitle('ulob\'s Stats!')
          .addFields(
               { name: "Servers:", value: `\`\`\`${servers_count}\`\`\``, inline: true },
               { name: "Users:", value: `\`\`\`${users}\`\`\``, inline: true },
               { name: "Uptime: ", value: uptime },
       
       
               { name: "Owner",value: `<@852985778584944691>「\`ko#8777\`」`}
       
             )
          .setColor('#41A2D5')
          .setTimestamp();

		message.channel.send({ embeds: [embed] });
	},
};