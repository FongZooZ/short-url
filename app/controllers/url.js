const shortid = require('shortid');
const mongoose = require('mongoose');
const ShortUrl = mongoose.model('ShortUrl');

exports.save = async (req, res, next) => {
	if (!req.body || !req.body.url) return res.sendStatus(400);

	const cond = { url: req.body.url };

	let short;

	try {
		short = await ShortUrl.findOne(cond);
	} catch (err) {
		return next(err);
	}

	if (!short) {
		short = new ShortUrl({url: req.body.url});
		try {
			await short.save();
		} catch (err) {
			return next(err);
		}
	}

	res.json(short);
};

exports.redirect = (req, res, next) => {
	if (!req.shortUrl) return res.redirect('/');
	res.redirect(req.shortUrl.url);
};