const { Client, Message, message, MessageEmbed } = require=('discord.js');
const { pagination } = require=('reconlx')

module.exports = {
    name: "help2",
	/**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const BotInfoEmbed = new MessageEmbed()
        .setColor(0x9EC1CF)
        .setTitle('Bot Information')
        .addField('**Prefix**', 'Bots prefix is: `!`')
        .addField('**Pages**', '`1. Bot Information`, `2. Moderation`, `3. Information`');

        const modEmbed = new MessageEmbed()
        .setColor(0xFF6663)
        .setTitle('Moderation')
        .addField('`!ban`', 'Ban a member.')
        .addField('`!unban`', 'Unban a member.')
        .addField('`!kick`', 'Kick a member.')
        .addField('`!warn`', 'Warn a member.')
        .addField('`!mute`', 'Mute a member so they cannot type or speak.')
        .addField('`!purge`', 'Delete a number of messages from a channel.')
        .addField('`!lock`', 'Lock a channel with optional timer and message.')
        .addField('`!lockend`', 'End lockdown of a channel');

        const infoEmbed = new MessageEmbed()
        .setColor(0xFDFD97)
        .setTitle('Information')
        .addField('`!ping`', 'Ask it a question and it will respond.....')
        .addField('`!userinfo`', 'Tells you the info of an user')
        .addField('`!serverinfo`', 'Tells you the info of a server');
        
        const embeds = [
            BotInfoEmbed,
            modEmbed,
            infoEmbed,
            ];

        pagination({
            embeds: embeds,
            message: message,
            time: 5000,
            
        });
    },
};

