/* eslint-disable no-useless-escape */
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "help",
	aliases: ['commands'],
	/**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
	run: async (client, message, args) => {
		// no args || u!help
		if (!args[0]) {
			const noArgs = new MessageEmbed()
				.setTitle('Help')
				.setThumbnail('https://i.imgur.com/GFkTVqJ.png')
				.setColor('#212224')
				.addField('<:moderation:903699551020531782> Moderation <:reply1:903696466835554305> ', '\`\`\`u!help mod\`\`\`', true)
				.addField('<:information:903700248319373343> Information <:reply1:903696466835554305> ', '\`\`\`u!help info\`\`\`', true)
				.addField('<:fun:903698982662995989> Fun <:reply1:903696466835554305> ', '\`\`\`u!help fun\`\`\`', true)
				.addField('<:music:903621242567942204> Music <:reply1:903696466835554305> ', '\`\`\`u!help music\`\`\`', true)
				.addField('<:utility:903695472533835839> Utility <:reply1:903696466835554305> ', '\`\`\`u!help utility\`\`\`', true)
				.addField('<:voice:903697198276046898> Voice <:reply1:903696466835554305> ', '\`\`\`u!help voice\`\`\`', true)
				
			return message.channel.send({ embeds: [noArgs] });
		}
		// args = mod || u!help mod
		else if (args[0] === 'mod') {
			const modEmbed = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('<:moderation:903699551020531782> Moderation')
				.addField('<:reply2:903702301900955688> Ban a member.', '```u!ban```', true)
				.addField('Kick a member. <:reply1:903696466835554305>', '```u!kick```', true)
				.addField('Delete a number of messages from a channel. <:reply1:903696466835554305>', '```u!purge```')
				.addField('Warn a member with <:blank:894264223763406908> a reason. <:reply1:903696466835554305>', '```u!warn```', true)
				.addField('Shows warnings of a <:blank:894264223763406908> member. <:reply1:903696466835554305>', '```u!warnings```', true)
				.addField('Clear all warnings of a <:blank:894264223763406908> member. <:reply1:903696466835554305>', '```u!clearwarns```', true)
				.addField('Mute a member so they cannot type or speak. <:reply1:903696466835554305>', '```u!mute```')
				.addField('Lock a channel. <:reply1:903696466835554305>', '```u!lock```', true)
				.addField('End lockdown of a channel <:reply1:903696466835554305>', '```u!lockend```', true);
			return message.channel.send({ embeds: [modEmbed] });
		}
		// args = moderation || u!help moderation
		else if (args[0] === 'moderation') {
			const modEmbed = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('<:moderation:903699551020531782> Moderation')
				.addField('<:reply2:903702301900955688> Ban a member.', '```u!ban```', true)
				.addField('Kick a member. <:reply1:903696466835554305>', '```u!kick```', true)
				.addField('Delete a number of messages from a channel. <:reply1:903696466835554305>', '```u!purge```')
				.addField('Warn a member with <:blank:894264223763406908> a reason. <:reply1:903696466835554305>', '```u!warn```', true)
				.addField('Shows warnings of a <:blank:894264223763406908> member. <:reply1:903696466835554305>', '```u!warnings```', true)
				.addField('Clear all warnings of a <:blank:894264223763406908> member. <:reply1:903696466835554305>', '```u!clearwarns```', true)
				.addField('Mute a member so they cannot type or speak. <:reply1:903696466835554305>', '```u!mute```')
				.addField('Lock a channel. <:reply1:903696466835554305>', '```u!lock```', true)
				.addField('End lockdown of a channel <:reply1:903696466835554305>', '```u!lockend```', true);
			return message.channel.send({ embeds: [modEmbed] });
		}
		// args = info || u!help info
		else if (args[0] === 'info') {
			const infoEmbed = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('<:information:903700248319373343> Information')
				.addField('<:reply2:903702301900955688> Shows the ulob\`s statistics', '```u!stats```', true)
				.addField('Shows the ulob\'s ping <:reply1:903696466835554305> ', '```u!ping```', true)
				.addField('<:reply2:903702301900955688> Tells you the info of an user', '```u!serverinfo```')
				.addField('<:reply2:903702301900955688> Tells you the info of a server', '```u!serverinfo```', true);
			return message.channel.send({ embeds: [infoEmbed] });
		}
		// args = information || u!help information
		else if (args[0] === 'information') {
			const infoEmbed = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('<:information:903700248319373343> Information')
				.addField('<:reply2:903702301900955688> Shows the ulob\`s statistics', '```u!stats```', true)
				.addField('Shows the ulob\'s ping <:reply1:903696466835554305> ', '```u!ping```', true)
				.addField('<:reply2:903702301900955688> Tells you the info of an user', '```u!serverinfo```')
				.addField('<:reply2:903702301900955688> Tells you the info of a server', '```u!serverinfo```', true);
			return message.channel.send({ embeds: [infoEmbed] });
		}

		else if (args[0] === 'fun') {
			const funEmbed = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('<:fun:903698982662995989> Fun')
				.addField('<:reply2:903702301900955688> Get posts from various subreddits.', '```/reddit```', true)
				.addField('<:reply2:903702301900955688> Get info about a Twitter user.', '```/twitter```')
				.setFooter('more commands coming soon!')

			return message.channel.send({ embeds: [funEmbed] });
		}

		else if (args[0] === 'music') {
			const musicEmbed = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('<:music:903621242567942204> Music')
				.addField('<:reply2:903702301900955688> Play a song.', '```/play```', true)
				.addField('Pause the current song. <:reply1:903696466835554305>', '```/pause```', true)
				.addField('Resume the current song. <:reply1:903696466835554305>', '```/resume```')
				.addField('Shows what song is now playing. <:reply1:903696466835554305>', '```/nowplaying```', true)
				.addField('Shows the servers songs queue <:reply1:903696466835554305>', '```/queue```', true)
				.addField('Shows the lyrics of the current song or a mentioned one. <:reply1:903696466835554305>', '```/lyrics```', true)
				.addField('Skip the current song <:reply1:903696466835554305>', '```/skip```')
				.addField('Adjust the volume of the music. <:reply1:903696466835554305>', '```/volume```', true)
			return message.channel.send({ embeds: [musicEmbed] });
		}

		else if (args[0] === 'util') {
			const utilityEmbed = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('<:utility:903695472533835839> Utility')
				.addField('<:reply2:903702301900955688> Sends a working calculator inside Discord.', '```u!calculator```')
				.setFooter('more commands coming soon!')

			return message.channel.send({ embeds: [utilityEmbed] });
		}

		else if (args[0] === 'utility') {
			const utilityEmbed = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('<:utility:903695472533835839> Utility')
				.addField('<:reply2:903702301900955688> Sends a working calculator inside Discord.', '```u!calculator```')
				.setFooter('more commands coming soon!')

			return message.channel.send({ embeds: [utilityEmbed] });
		}

		else if (args[0] === 'voice') {
			const voiceEmbed = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('<:voice:903697198276046898> Voice')
				.setDescription('coming soon!')

			return message.channel.send({ embeds: [voiceEmbed] });
		}


	},
};