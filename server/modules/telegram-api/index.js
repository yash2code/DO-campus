const TelegramBot = require('node-telegram-bot-api');
const config = require('../../../config');
const token = config.telegram.key;
const bot = new TelegramBot(token, {polling: false});

async function sendMessage({chatId, text}) {
	bot.sendMessage(chatId, text);
}

module.exports = exports = {
	sendMessage
};