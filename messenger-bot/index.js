const _ = require('lodash');

module.exports = exports = {
	handlePayload
};

async function handlePayload(payload) {

	if (payload.object !== 'page') {
		return;
	}

	const messages = mapToMessages(payload.entry);

	console.log(messages);
}

function mapToMessages(entries) {
	const isIncoming = (message, entry) => message.sender.id !== entry.id;
	return _.flatten(
		entries.map(
			entry => entry.messaging
				.filter(message => isIncoming(message, entry))
		)
	);
}