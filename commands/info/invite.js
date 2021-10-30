const { Cilent, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'invite',
    aliases: ['inv', 'links'],
    description: 'Gives you an link to invite Cleckzie to your server.',
    /**
    * @param {Client} client
    * @param {Message} message
    * @param {String[]} args
    */
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle('<:511795868583:894273449231532063> ulob')
        .addField('<:invitelink:902097960643493908>  Invite link', '[<:redirect:902149251818197022> Click Here](https://dsc.gg/ulob)', true)
        .addField('<:892086242097:894246879427199027> Source Code', '[<:redirect:902149251818197022> Click Here](https://github.com/korauo/ulob)', true)
        .addField('<:960207583948:894529757658632222> Documentation', '[<:redirect:902149251818197022> Click Here](https://korauo.github.io/ulob/)', true)
        .setColor('#41A2D5')
        .setThumbnail('https://cdn.glitch.com/5ee62511-cbe6-4d98-bdfe-7a864d14ebca%2Fimage-modified.png?v=1633071650894')
        .setTimestamp()
        .setFooter(`${message.author.username}`,
        message.author.displayAvatarURL({
             dynamic: true,
        }),
   );

        message.channel.send({ embeds: [embed] });
    }
};