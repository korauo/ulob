/* eslint-disable no-unused-vars */
const { Message, Client, MessageEmbed } = require("discord.js");
const got = require('got');

module.exports = {
	name: "reddit",
	description: 'Get posts from various subreddits.',
	permissions: ['SEND_MESSAGES'],
	options: [
		{
			name: 'category',
			description: 'Choose the subreddit.',
			type: 'STRING',
			required: true,
			choices: [
				{
					name: 'r/memes',
					value: 'r/memes',
				},
				{
					name: 'r/dankmemes',
					value: 'r/dankmemes',
				},
				{
					name: 'r/facepalm',
					value: 'r/facepalm',
				},
                {
                    name: 'r/im14andthisisdeep',
                    value: 'r/im14andthisisdeep',
                },
                {
                    name: 'r/cursedcomments',
                    value: 'r/cursedcomments',
                },
			],
		},
	],
	/**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
	run: async (client, interaction) => {
		const category = interaction.options.getString('category');
		// r/memes string
		if (category === 'r/memes') {
			const infoBotEmbed = new MessageEmbed()
            got('https://www.reddit.com/r/memes/random/.json').then(res => {
                const content = JSON.parse(res.body);
                const embed = new MessageEmbed()
                    .setTitle(content[0].data.children[0].data.title)
                    .setImage(content[0].data.children[0].data.url)
                    .setColor("#2F3136")
                    .setFooter(`️👍️ ${content[0].data.children[0].data.ups} | 💬: ${content[0].data.children[0].data.num_comments}`);
                interaction.followUp({ embeds: [embed] });
            });
		}
		// r/dankmemes string
		if (category === 'r/dankmemes') {
            got('https://www.reddit.com/r/dankmemes/random/.json').then(res => {
                const content = JSON.parse(res.body);
                const embed2 = new MessageEmbed()
                    .setTitle(content[0].data.children[0].data.title)
                    .setImage(content[0].data.children[0].data.url)
                    .setColor("#2F3136")
                    .setFooter(`️👍️ ${content[0].data.children[0].data.ups} | 💬: ${content[0].data.children[0].data.num_comments}`);
                interaction.followUp({ embeds: [embed2] });
            });
		}
		// r/facepalm string
		if (category === 'r/facepalm') {
            got('https://www.reddit.com/r/facepalm/random/.json').then(res => {
                const content = JSON.parse(res.body);
                const embed3 = new MessageEmbed()
                    .setTitle(content[0].data.children[0].data.title)
                    .setImage(content[0].data.children[0].data.url)
                    .setColor("#2F3136")
                    .setFooter(`️👍️ ${content[0].data.children[0].data.ups} | 💬: ${content[0].data.children[0].data.num_comments}`);
                interaction.followUp({ embeds: [embed3] });
            });
		}
        // r/im14andthisisdeep string
		if (category === 'r/im14andthisisdeep') {
            got('https://www.reddit.com/r/im14andthisisdeep/random/.json').then(res => {
                const content = JSON.parse(res.body);
                const embed4 = new MessageEmbed()
                    .setTitle(content[0].data.children[0].data.title)
                    .setImage(content[0].data.children[0].data.url)
                    .setColor("#2F3136")
                    .setFooter(`️👍️ ${content[0].data.children[0].data.ups} | 💬: ${content[0].data.children[0].data.num_comments}`);
                interaction.followUp({ embeds: [embed4] });
            });
		}
        // r/cursedcomments string
        if (category === 'r/cursedcomments') {
            got('https://www.reddit.com/r/cursedcomments/random/.json').then(res => {
                const content = JSON.parse(res.body);
                const embed5 = new MessageEmbed()
                    .setTitle(content[0].data.children[0].data.title)
                    .setImage(content[0].data.children[0].data.url)
                    .setColor("#2F3136")
                    .setFooter(`️👍️ ${content[0].data.children[0].data.ups} | 💬: ${content[0].data.children[0].data.num_comments}`);
                interaction.followUp({ embeds: [embed5] });
            });
		}
	},
};