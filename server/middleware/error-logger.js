const pino = require('pino')();

module.exports = exports = (appContext) => {

	return async (ctx, next) => {
		try {
			await next();
		} catch (err) {
			appContext.logger.error(err);
			ctx.response.status = 500;
		}

	};

};