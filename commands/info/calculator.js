module.exports = {
	name: 'calculator',
	aliases: ['calc'],
	/**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
	run: async (client, message, args) => {
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