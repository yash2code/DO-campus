const google = require('googleapis');
const youtube = google.youtube('v3');
const config = require('../../../config');

module.exports = exports = {
	getPlaylistTracks
};

async function getPlaylistTracks(playlistId) {
	if (!playlistId) throw new TypeError(`No playlistId provided.`);
	const response = await getPlaylistItems(playlistId);
	return response.items.map(mapToUrl);
}

function mapToUrl(playListItem) {
	return `https://www.youtube.com/watch?v=${playListItem.contentDetails.videoId}`;
}

async function getPlaylistItems(playlistId) {
	return new Promise((resolve, reject) => {
		youtube.playlistItems.list({
			auth: config.youtube.key,
			part: 'contentDetails',
			playlistId: playlistId,
			maxResults: 25
		}, function (err, response) {
			if (err) {
				reject(err);
			}
			resolve(response);
		});
	});
}