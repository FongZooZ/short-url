module.exports = (app) => {
	app.route('/').get((req, res, next) => res.render('home'));

	require('./url')(app);
};