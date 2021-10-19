/* eslint-disable no-empty */
const { Client, Message, MessageEmbed } = require('discord.js');
const warndb = require('../../models/warndb');

module.exports = {
    name: 'warn',
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

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if (!user) {

            const embed1 = new MessageEmbed()
            .setTitle('<:ulobError:894937662518091776> Mention a valid member.')
            .setColor('#F04947')
            .setTimestamp();

            return message.reply({ embeds: [embed1] })
        } 

        const reason = args.slice(1).join(" ")
        if (!reason) {
            const embed2 = new MessageEmbed()
            .setTitle('<:ulobError:894937662518091776> Please provide a reason.')
            .setColor('#F04947')
            .setTimestamp();

            return message.reply({ embeds: [embed2] })
        } 

        warndb.findOne({
            guild: message.guild.id,
            user: user.user.id
        }, async (err, data) => {
            if (err) throw err;
            if (!data) {
                data = new warndb({
                    guild: message.guild.id,
                    user: user.user.id,
                    content: [{
                        moderator: message.author.id,
                        reason: reason
                    }]
                })
            } else {
                const object = {
                    moderator: message.author.id,
                    reason: reason
                }
                data.content.push(object)
            }
            data.save()

        })

        {
            const warnReturn = new MessageEmbed()
			.setColor('#43B581')
			.setTitle(`<:ulobSuccess:894937662497128488> *${user.displayName} was warned*`)
			.addField('Reason:', `${reason}`)
			.setTimestamp();
    
            message.channel.send({ embeds: [warnReturn] });
        }
        

    }
}