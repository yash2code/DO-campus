const youtube = require('../youtube-api');

const playlistMap = {
	'anything': 'FLyZs3JyvLqIlmWXnXrCGqdw',
	'techno': 'PLXDGozIYBcJxAbn9e-5HRpvTOYCacB0mc',
	'house': 'PLXDGozIYBcJxpFGfFWdPbmsu3fers4dRX',
	'chill': 'PLXDGozIYBcJx83G13rIU-jSIF6eU3ck40',
	'sexy': 'PLXDGozIYBcJy2BHe73pyNldUJ7zVvDeEB',
	'acid': 'PLXDGozIYBcJxze7VrYfPdQFBvtexlQ8mT',
	'goa': 'PLXDGozIYBcJxMDWVTcbfr3C0SFm8OA3zT',
};

async function suggestTrack(genre = 'anything') {
	const playlistId = playlistMap[genre] || playlistMap['anything'];
	const tracks = await youtube.getPlaylistTracks(playlistId);
	return tracks[Math.floor(tracks.length * Math.random())];
}

module.exports = exports = {
	suggestTrack: suggestTrack,
	availableGenres: Object.keys(playlistMap)
};