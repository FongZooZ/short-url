module.exports = (app) => {
	require('./url')(app);

	app.route('/').get((req, res, next) => res.render('home'));
};