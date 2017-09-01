module.exports = exports = {

	port: process.env.PORT || 3000,

	facebook: {
		appSecret: process.env.FB_APP_SECRET,
		pageToken: process.env.FB_PAGE_TOKEN,
		token: 'some-token'
	},

	youtube: {
		key: process.env.YOUTUBE_API_KEY
	},

	telegram: {
		key: process.env.TELEGRAM_API_KEY
	},

	apiAi: {
		key: process.env.API_AI_KEY
	}

};