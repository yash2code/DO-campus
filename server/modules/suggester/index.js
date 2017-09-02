const youtube = require('../youtube-api');
const errors = require('../errors');

const playlistMap = {
	'anything': 'FLyZs3JyvLqIlmWXnXrCGqdw',
	'techno': 'PLXDGozIYBcJxAbn9e-5HRpvTOYCacB0mc',
	'house': 'PLXDGozIYBcJxpFGfFWdPbmsu3fers4dRX',
	'chill': 'PLXDGozIYBcJx83G13rIU-jSIF6eU3ck40',
	'acid': 'PLXDGozIYBcJxze7VrYfPdQFBvtexlQ8mT',
	'goa': 'PLXDGozIYBcJxMDWVTcbfr3C0SFm8OA3zT',
	'international': 'PLXDGozIYBcJy8ervhwn7r3BktgI6Gaw8x',
	'hardstyle': 'PLXDGozIYBcJwtfPkdI0EgCHiZuAIHbfN2',
	'swing': 'PLXDGozIYBcJwyZSdAc-ACPW-sgnTBnW7X',
	'latin': 'PLXDGozIYBcJwuFfzj6biMg52NMaRqpxRz',
	'accoustic': 'PLXDGozIYBcJx0lL3mq8TfL8v7oX_F2lXd',
	'hip-hop': 'PLXDGozIYBcJwGCbrN5rA2RMlVK_TAKE4E',
	'dj-sets': 'PLXDGozIYBcJw7WVDoVcH7JMurOuxkixyD',
};

async function suggestTrack(genre) {

	if (!playlistMap[genre]) {
		throw new errors.InvalidGenreError();
	}

	const playlistId = playlistMap[genre];
	// Consider caching playlist track results (rolling build up
	// Any genre requested that was not cached yet, cach it, else not
	// Consider retrieving this way also more tracks instead of 25
	const tracks = await youtube.getPlaylistTracks(playlistId);
	return tracks[Math.floor(tracks.length * Math.random())];

}

module.exports = exports = {
	suggestTrack: suggestTrack,
	availableGenres: Object.keys(playlistMap)
};