module.exports = exports = {

	port: process.env.PORT || 3000,

	facebook: {
		appSecret: process.env.FB_APP_SECRET,
		pageToken: process.env.FB_PAGE_TOKEN,
		token : 'some-token'
	}

};