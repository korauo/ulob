const ms = require("ms");
const { Message, MessageEmbed, Interaction } = require("discord.js");

module.exports = {
    name: 'purge',
    description: 'Delete a number of messages from a channel.',
    userPermissions: ["MANAGE_MESSAGES"],
    options: [
        {
            name: 'amount',
            description: 'Amount of messages which is gonna be deleted',
            type: 'INTEGER',
            required: true,
        },
    ],

    run: async(client, interaction) => {
        const amount = interaction.options.getInteger('amount');

        if( amount > 500) {
            
            const purgeMax = new MessageEmbed()
            .setTitle('<:ulobError:894937662518091776> The maximum amount of messages you can delete is 500!')
            .setColor


            return interaction.followUp ({ embeds: [] })
        }
    }
}