const _ = require('lodash');
const logger = require('pino')();
const publisher = require('./publisher');
const suggester = require('../suggester');

module.exports = exports = {
	handlePayload
};

async function handlePayload(payload) {

	if (payload.object !== 'page') {
		return;
	}

	return Promise.all(mapToEvents(payload.entry).map(handleEvent))
}

async function handleEvent(event) {
	try {

		if (event.message.text) {
			await handleMessageEvent(event);
		} else {
			logger.info('Event not supported');
		}

	} catch (err) {
		logger.error(err);
	}
}

async function handleMessageEvent(event) {

	const track = await suggester.suggestTrack();

	await publisher.publishMessage({
		text: `I will get back to you ${track}`,
		event: event
	});
}

function mapToEvents(entries) {
	const isIncoming = (message, entry) => message.sender.id !== entry.id;
	return _.flatten(
		entries.map(
			entry => entry.messaging
				.filter(message => isIncoming(message, entry))
		)
	);
}