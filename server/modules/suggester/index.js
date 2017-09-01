const youtube = require('../youtube-api');
const errors = require('../errors');

const playlistMap = {
	'anything': 'FLyZs3JyvLqIlmWXnXrCGqdw',
	'techno': 'PLXDGozIYBcJxAbn9e-5HRpvTOYCacB0mc',
	'house': 'PLXDGozIYBcJxpFGfFWdPbmsu3fers4dRX',
	'chill': 'PLXDGozIYBcJx83G13rIU-jSIF6eU3ck40',
	'acid': 'PLXDGozIYBcJxze7VrYfPdQFBvtexlQ8mT',
	'goa': 'PLXDGozIYBcJxMDWVTcbfr3C0SFm8OA3zT',
};

async function suggestTrack(genre) {

	if (!playlistMap[genre]) {
		throw new errors.InvalidGenreError();
	}

	const playlistId = playlistMap[genre];
	const tracks = await youtube.getPlaylistTracks(playlistId);
	return tracks[Math.floor(tracks.length * Math.random())];

}

module.exports = exports = {
	suggestTrack: suggestTrack,
	availableGenres: Object.keys(playlistMap)
};