const url = require('../controllers/url');

module.exports = (app) => {
	app.route('/api/short-url')
		.post(url.save);

	app.route('/:shortUrl')
		.get(url.redirect);
};