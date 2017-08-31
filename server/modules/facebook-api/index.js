const request = require('request-promise-native');
const config = require('../../../config');
const joinUrl = require('url-join');
const baseUrl = 'https://graph.facebook.com/v2.10';
const messageUrl = joinUrl(baseUrl, '/me/messages');

module.exports = exports = {
	sendMessage
};

async function sendMessage({text, recipientId}) {

	return request({
		method: 'POST',
		json: true,
		url: messageUrl,
		qs: {
			access_token: config.facebook.pageToken
		},
		body: {
			recipient: {
				id: recipientId
			},
			message: {
				text: text
			}
		}
	})

}