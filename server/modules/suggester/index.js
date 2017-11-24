const google = require('googleapis');
const youtube = google.youtube('v3');

const youtube_api = require('../youtube-api');
const errors = require('../errors');
const config = require('../../../config');

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
	'dennis': 'PLXDGozIYBcJwL4Sdre6xTd1CRA19TbExP',
};

function search(key, part ,genre) {
	return new Promise((resolve, reject) => {
	  youtube.search.list({
		auth: key,
		part: part,
		q: genre
	  }, function (err, data) {
		if (err) {
		  reject(err);
		  return;
		}
		// use better check for playlistId here
		resolve(data ? data.items[0].id.playlistId : null);
	  })
	});
  }
  
  // then use it here
  async function suggestTrack(genre) {
	const playlistId = await search(config.youtube.key, 'id,snippet', genre);      
	const tracks = await youtube_api.getPlaylistTracks(playlistId);
	return tracks[Math.floor(tracks.length * Math.random())];
  }

module.exports = exports = {
	suggestTrack: suggestTrack,
	availableGenres: Object.keys(playlistMap)
};