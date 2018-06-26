const Command = require('../../structures/Command');
const { stripIndents } = require('common-tags');

module.exports = class DonateCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'donate',
			aliases: ['patreon', 'paypal'],
			group: 'util',
			memberName: 'donate',
			description: 'Responds with Xiao\'s donation links.',
			guarded: true
		});
	}

	run(msg) {
		return msg.say(stripIndents`
			Contribute to Xiao development!
			<https://www.patreon.com/dragonfire535>
			<https://paypal.me/dragonfire535>
		`);
	}
};
