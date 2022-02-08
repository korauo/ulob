const client = require('../index');
const chalk = require('chalk');


const botStatus = require('../config.json').status;
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

client.once('ready', () => {
	client.user.setActivity(botStatus, { type: 'PLAYING' });
	console.log(chalk.greenBright('[info] - ') + chalk.blueBright(`${client.user.tag} is up and ready to go!`));
	console.log(chalk.greenBright('[info] - ') + chalk.blueBright(`You should be able to use slash commands and normal commands properly.`));
	console.log(chalk.greenBright('[info] - ') + chalk.yellow('Restart the terminal and/or wait to register the slash commands.'));
	client.on("messageCreate", message => {
		if (message.content === 'mila') {
		   message.channel.send('L Bozo','https://i.imgur.com/W55JB9Q.png', 'https://i.imgur.com/ribiOKB.png')
	    }
		
		if (message.content === 'couchy') {
		   message.channel.send('i think you meant coochie bro')
	    }
		if (message.content === 'aman') {
		   message.channel.send('doesnt want to do a voice reveal thanks leave me alone')
	    }
		if (message.author.bot) return false;
		if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
		if (message.mentions.has(client.user.id)) {
			const clientMentioned = new MessageEmbed()
			.setAuthor(`${client.user.username}`, `https://i.imgur.com/GFkTVqJ.png`)
			.addField('My prefix is','\`\`\`u!\`\`\`', true)
			.addField('Made with', '\`\`\`discord.js v13\`\`\`', true)
			.addField('Owners', '\`\`\`ko#8777 \nSpreeHertz#1134\`\`\`', true)
			.setTitle('Hi, I\'m ulob!')
			.setDescription('***I\'m the ~~basic~~ discord moderation bot!***')

			const row = new MessageActionRow().addComponents(
				new MessageButton()
				.setLabel("Invite")
				.setURL("https://discord.com/oauth2/authorize?client_id=893037327440568371&permissions=8&scope=bot%20applications.commands")
				.setStyle("LINK")
				.setEmoji("<:invitelink:902097960643493908>"),

				new MessageButton()
				.setLabel("Source Code")
				.setURL("https://github.com/korauo/ulob")
				.setStyle("LINK")
				.setEmoji('<:code:894246879427199027>'),

				new MessageButton()
				.setLabel("Documentation")
				.setURL("https://korauo.github.io/ulob/")
				.setStyle("LINK")
				.setEmoji('<:page:894529757658632222>')
			);
	
			message.channel.send({ embeds: [clientMentioned], components: [row] });
		};
	});
});

client.on('error', () => {
	console.log(chalk.red('[error] - ') + chalk.blueBright('<ready.js>')(' Oh no! An error has occured. Please file an issue on https://github.com/korauo/ulob if you think that it is an error with our code.'));
});
