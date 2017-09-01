const api = require('../api-ai-api');

async function parseGenre(message, userExternalId) {

	const response = await api.query({
		sessionId: userExternalId,
		query: message
	});

	const hasParsedGenre = response.status.code === 200
		&& (response.result.parameters && response.result.parameters['Music-Genre'])
		&& (response.result.metadata && response.result.metadata.intentName === 'Request-track');

	return hasParsedGenre ? response.result.parameters['Music-Genre'] : null;
}

module.exports = exports = {
	parseGenre
};