const client = require('../index');
const chalk = require('chalk');


const botStatus = require('../config.json').status;

client.once('ready', () => {
	client.user.setActivity(botStatus, { type: 'PLAYING' });
	console.log(chalk.greenBright('[info] - ') + chalk.blueBright(`${client.user.tag} is up and ready to go!`));
	console.log(chalk.greenBright('[info] - ') + chalk.blueBright(`You should be able to use slash commands and normal commands properly.`));
	console.log(chalk.greenBright('[info] - ') + chalk.yellow('Restart the terminal and/or wait to register the slash commands.'));
});

client.on('error', () => {
	console.log(chalk.red('[error] - ') + chalk.blueBright('<ready.js>')(' Oh no! An error has occured. Please file an issue on https://github.com/korauo/ulob if you think that it is an error with our code.'));
});