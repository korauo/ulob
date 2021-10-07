const { Client, Collection } = require("discord.js");
require('dotenv').config();

const client = new Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
	intents: 32767,
	disableMentions: 'everyone',
});

module.exports = client;


client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

require("./handler")(client);

client.login(process.env.token);