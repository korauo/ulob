const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'purge',
    aliases: ['clear'],
    UserPerms: ['MANAGE_MESSAGES'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        try {
            let delamount = args[0];
            if (isNaN(delamount) || parseInt(delamount <= 0)) return message.reply('Error:')

            if (parseInt(delamount) > 500) return message.reply('You can\'t delete 500 messages at a time!')

            await message.channel.bulkDelete(parseInt(delamount) + 1, true);

            await message.channel.send(`Purged ${filtered.size - 1} messages.`).then(m => {
                setTimeout(() => {
                    m.delete()
                }, 5000) 
            })
        } catch (e) {
            console.log(e)
        }
    }
}