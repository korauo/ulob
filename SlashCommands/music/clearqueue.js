const { MessageEmbed } = require("discord.js");
const player = require("../../client/player");

module.exports = {
    name: "clearqueue",
    description: "Clear the song queue.",
    run: async (client, interaction) => {

        if (!interaction.member.voice.channel) {
         return interaction.followUp({
                content: "Please join a voice channel first!",
            });
        }

        const queue = player.getQueue(interaction.guildId);

        if (!queue){
            const emptyqueue = new MessageEmbed()
            .setTitle('<:ulobError:894937662518091776> There are no songs in queue!')
            .setColor('#F04947')

            interaction.followUp({ embeds: [emptyqueue] });
        }

        else if (queue.playing) {
            await queue.clear();
            const queuecleared = new MessageEmbed()
            .setTitle('<:ulobSuccess:894937662497128488> Cleared queue!')
            .setColor('#43B581')

            interaction.followUp({ embeds: [queuecleared] });
        }
    },
};
