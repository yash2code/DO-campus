const config = require('../../../config');
const Api = require('apiai');
const api = Api(config.apiAi.key, {language: 'en'});

function query({query, sessionId}) {

	if (!sessionId) throw new TypeError('No sessionId provided');

	return new Promise((resolve, reject) => {
		const request = api.textRequest(query, {
			sessionId
		});
		request.on('response', resolve);
		request.on('error', reject);
		request.end();
	});

}

module.exports = {
	query: query,
};