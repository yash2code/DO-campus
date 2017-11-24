/*const router = require('koa-better-router')().loadMethods();
const facebookBodyParser = require('../middleware/facebook-body-parser');
const messengerBot = require('../modules/messenger-bot');

module.exports = exports = (appCtx) => {

	router.get('/', async (ctx) => {
		ctx.response.body = 'Foo Bar Baz!';
	});

	router.get('/meta/privacy', async (ctx) => {
		ctx.response.body = 'We do not store any data about you. You ask for a genre, and I give you a random suggestion.';
	});

	router.get('/webhook/facebook', async (ctx) => {

		const expectedVerifyToken = appCtx.config.facebook.token;
		const hubVerifyToken = ctx.request.query['hub.verify_token'];

		if (expectedVerifyToken === hubVerifyToken) {
			ctx.response.body = ctx.request.query['hub.challenge'];
		} else {
			throw new Error('Invalid verification token.')
		}

	});

	router.post('/webhook/facebook', facebookBodyParser, async (ctx) => {

		const payload = ctx.request.body;

		if (!payload) {
			throw new Error('No payload found');
		}

		messengerBot
			.handlePayload(payload)
			.catch(appCtx.logger.error);

		ctx.response.status = 200;
	});

	return router.middleware();
};*/