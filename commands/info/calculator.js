module.exports = {
	name: 'calculator',
	aliases: ['calc'],
	/**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
	run: async (client, message, args) => {
		if (message.author.id !== '852985778584944691')
        return message.channel.send("Hey! You can't use that.")
		
		const { Calculator } = require('weky');
		await Calculator({
			message: message,
			embed: {
				title: 'Calculator',
				color: '#5865F2',
				footer: 'ulob',
				timestamp: true,
			},
			disabledQuery: 'Calculator is disabled!',
			invalidQuery: 'The provided equation is invalid!',
			othersMessage: 'Only <@{{author}}> can use the buttons!',
		});
	},
};