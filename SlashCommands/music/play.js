const { QueryType } = require("discord-player");
const { MessageEmbed } = require("discord.js");
const player = require("../../client/player");

module.exports = {
    name: "play",
    description: "play a song",
    options: [
        {
            name: "songtitle",
            description: "title of the song",
            type: "STRING",
            required: true,
        },
    ],
    run: async (client, interaction) => {
        const songTitle = interaction.options.getString("songtitle");

        if (!interaction.member.voice.channel)
            return interaction.followUp({
                content: "Please join a voice channel first!",
            });

        const searchResult = await player.search(songTitle + "lyrics", {
            requestedBy: interaction.user,
            searchEngine: QueryType.AUTO,
        });

        const queue2 = player.getQueue(interaction.guildId);

        const queue = await player.createQueue(interaction.guild, {
            metadata: interaction.channel,
        });

        if (!queue.connection)
            await queue.connect(interaction.member.voice.channel);

            const embed = new MessageEmbed()
              .setTitle(`Playing ${songTitle}`)
              .setDescription(`in <#${interaction.member.voice.channel.id}>`)
              .setColor("#41A2D5")
              .setTimestamp()
              .setFooter(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }))

        interaction.followUp({ embeds: [embed] });

        searchResult.playlist
            ? queue.addTracks(searchResult.tracks)
            : queue.addTrack(searchResult.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};
