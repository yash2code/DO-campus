module.exports = exports = {
	suggestTrack: suggestTrack
};

const suggestions = [
	'https://youtu.be/Xz8aM8ZoAbA',
	'https://youtu.be/8Mr745PQwOA',
	'https://youtu.be/YqCV2BV7mDw',
	'https://youtu.be/xEsIkXk5hmo',
];

async function suggestTrack() {
	return suggestions[Math.floor(suggestions.length * Math.random())];
}