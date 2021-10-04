/* eslint-disable no-unused-vars */
const { Client, MessageEmbed, CommandInteraction } = require("discord.js");

module.exports = {
    name: 'kick',
    description: 'Kick the mentioned member.',
    userPermissions: ["KICK_MEMBERS"],
    options: [
        {
            name: 'Target',
            description: 'Target Member to kick.',
            type: 'USER',
            required: true
        },
        {
            name: 'Reason',
            description: 'Reason for this kick',
            type: 'STRING',
            required: false
        }
    ],
    

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */
    run: async(client, interaction, args) => {
        const target = interaction.options.getMember('Target');
        const reason = interaction.options.getString('Reason') || "No Reason provided.";
        
        if(target.roles.highest.postion >= interaction.member.roles.highest.position)
            
        const roleHierarchy = new MessageEmbed() 
        .setTitle('<:589702039932:894246879657873428> Error!')
        .setFields('<:780897786969:894246879733358602> You cant take action on this user as their role is higher than yours.')
        .setColor('#8b0000')
        .setFooter(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        return interaction.followUp({ embeds: [roleHierarchy] });

        const kickMessage = new MessageEmbed()
        .setColor('#FFAAA7')
        .setFields(`You have been kicked from **${interaction.guild.name}**, reason: **${reason}**`)
        .setFooter(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        
        target.send({ embeds: [kickMessage] });

        target.kick(reason);

        interaction.followUp({ embeds: [] });

        const kickReturn = new MessageEmbed()
        .setColor('#D5ECC2')
        .setFields(`<:965555212854:894246879360090143> Kicked **${target.user.tag}** successfully! Reason: **${reason}**`)
        .setTimestamp()
        .setFooter(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }))

    },
}