/* eslint-disable no-empty */
const { Client, Message, MessageEmbed } = require('discord.js');
const chalk = require('chalk');

module.exports = {
    name: 'purge',
    aliases: ['clear'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {

        if (!message.member.permissions.has("MANAGE_MESSAGES")) {

            const noPerms = new MessageEmbed()

                .setTitle('<:ulobError:894937662518091776> You cannot use this command!')
                .setColor('#F04947')
                .setTimestamp();

            return message.channel.send({ embeds: [noPerms] });
        }
        try {
            const delamount = args[0];
            if (isNaN(delamount) || parseInt(delamount <= 0)) return message.reply(`**You need to specify a number between 1 and 500!**`);

            if (parseInt(delamount) > 500) {

                const purgeMax = new MessageEmbed()
                .setTitle('<:ulobError:894937662518091776> The maximum amount of messages you can delete is 500!')
                .setColor('#F04947')
                .setTimestamp();

                return message.reply({ embeds: [purgeMax] });
            } 

            await message.channel.bulkDelete(parseInt(delamount) + 1, true);

            message.channel.bulkDelete(parseInt(delamount) + 1, true) ; {
                const deleteMessage = new MessageEmbed()
                    .setTitle(`<:ulobSuccess:894937662497128488> Deleted ${delamount} messages.`)
                    .setColor('#43B581')
                    .setTimestamp()
    
                message.channel.send({ embeds: [deleteMessage] });
            }

        } 	catch (error) {
			console.log(chalk.red(`An error occured from purge.js / u! commands. Error: ${error}`));
			message.channel.send(`An unknown error occured: ${error}`);
		}
    }
};