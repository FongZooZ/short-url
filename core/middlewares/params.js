const mongoose = require('mongoose');
const ShortUrl = mongoose.model('ShortUrl');

const shortUrl = async (req, res, next) => {
	try {
		let shortUrl = await ShortUrl.findOne({_id: req.params.shortUrl});
		req.shortUrl = shortUrl;
		return next();
	} catch (err) {
		next(err);
	}
};

module.exports.init = (app) => {
	app.param('shortUrl', shortUrl);
};