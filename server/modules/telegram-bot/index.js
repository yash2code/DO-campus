const TelegramBot = require('node-telegram-bot-api');
const config = require('../../../config');
const token = config.telegram.key;
const bot = new TelegramBot(token, {polling: true});
const suggester = require('../suggester');
const errors = require('../errors');
const logger = require('pino')();
const nlp = require('../nlp');

module.exports = exports = {

	start() {
		bot.onText(/(.+)/, handleMessage);
	}

};

async function handleMessage(event, match) {
	const chatId = event.chat.id;
	
	try {
		const message = match[0] ? match[0].toLowerCase() : '';
		//const specifiedGenre = await nlp.parseGenre(message, event.chat.id);
		const track = await suggester.suggestTrack(message);
		await bot.sendMessage(event.chat.id, track);
	} catch (err) {
		if (err instanceof errors.InvalidGenreError) {
			await bot.sendMessage(chatId, `wrong Please specify one of the following genres: ${suggester.availableGenres.join(', ')}`);
		} else {
			logger.error(err);
		}
	}
}