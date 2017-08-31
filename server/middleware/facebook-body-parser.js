const config = require('../../config');
const crypto = require('crypto');
const getRawBody = require('raw-body');

module.exports = exports = async function (ctx, next) {

	const rawRequestBody = await getRawBody(ctx.request.req);
	const appSecret = config.facebook.appSecret;
	const signatureHash = ctx.request.header['x-hub-signature'];
	const calculatedHash = 'sha1=' + crypto.createHmac('sha1', appSecret)
		.update(rawRequestBody)
		.digest('hex');

	const hasInvalidSignature = signatureHash !== calculatedHash;

	if (hasInvalidSignature) {
		throw new TypeError('Invalid Facebook Signature');
	}

	ctx.request.body = JSON.parse(rawRequestBody.toString('utf-8'));

	await next();

};