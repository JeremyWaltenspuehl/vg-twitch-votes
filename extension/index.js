const { message } = require('git-rev-sync');
const tmi = require('tmi.js')

module.exports = function (nodecg) {
	nodecg.Replicant('twitchSettings',{ defaultValue: "ssblangan"});

	nodecg.listenFor('twitchConnect', ()  => {

	nodecg.log.info('tried to connect');
	const client = new tmi.Client({
		channels: [ nodecg.Replicant('twitchSettings').value ]
	});
	client.disconnect()
	client.connect()

	client.on('message', (channel, tags, message, self) => {
		nodecg.log.info(message)
		nodecg.sendMessage('twitchMessage', message)
	})

	})


};
