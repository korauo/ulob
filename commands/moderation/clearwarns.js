/* eslint-disable no-empty */
const { MessageEmbed } = require('discord.js');
const db = require('../../models/warndb')

module.exports = {
    name: 'clearwarns',
    run: async (client, message, args) => {
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!user) return message.channel.send('User not found.')
        db.findOne({
            guild: message.guild.id,
            user: user.user.id
        }, async (err, data) => {
            if (err) throw err;
            if (data) {

                if (!message.member.permissions.has("MANAGE_MESSAGES")) {

                    const noPerms = new MessageEmbed()
        
                        .setTitle('<:ulobError:894937662518091776> You cannot use this command!')
                        .setColor('#F04947')
                        .setTimestamp();
        
                    return message.channel.send({ embeds: [noPerms] });
                }

                await db.findOneAndDelete({
                    user: user.user.id,
                    guild: message.guild.id
                })
                const clearReturn = new MessageEmbed()

                .setTitle(`<:ulobSuccess:894937662497128488> Cleared all warnings for ${user.displayName}.`)
                .setColor('#43B581')
                .setTimestamp()

                message.channel.send({ embeds: [clearReturn] })
            } else {
                const noWarns = new MessageEmbed()
                .setTitle('<:ulobError:894937662518091776> This user does not have any warnings in this server!')
                .setColor('#F04947')
                .setTimestamp();

                message.channel.send({ embeds: [noWarns] })
            }
        }) 
    }
}