/*const _ = require('lodash');
const logger = require('pino')();
const publisher = require('./publisher');
const suggester = require('../suggester');
const errors = require('../errors');
const nlp = require('../nlp');

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

	try {
		const message = event.message.text.toLowerCase();
		const specifiedGenre = await nlp.parseGenre(event.message.text, event.sender.id);

		const track = await suggester.suggestTrack(specifiedGenre);

		await publisher.publishMessage({
			text: `${track}`,
			event: event
		});

	} catch (err) {
		if (err instanceof errors.InvalidGenreError) {
			await publisher.publishMessage({
				text: `wrong genre Please specify one of the following genres: ${suggester.availableGenres.join(', ')}`,
				event: event
			});
		}else{
			logger.error(err);
		}
	}

}

function mapToEvents(entries) {
	const isIncoming = (message, entry) => message.sender.id !== entry.id;
	return _.flatten(
		entries.map(
			entry => entry.messaging
				.filter(message => isIncoming(message, entry))
		)
	);
}*/