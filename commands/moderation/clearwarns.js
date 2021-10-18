/* eslint-disable no-empty */
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
                await db.findOneAndDelete({
                    user: user.user.id,
                    guild: message.guild.id
                })
                message.channel.send(`Cleared all the warnings for ${user.displayName}`)
            } else {
                message.channel.send('This user does not have any warns in this server!')
            }
        }) 
    }
}