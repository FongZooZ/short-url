module.exports = (app) => {
	app.route('/').get((req, res, next) => {
		res.render('home', {greet: 'Hello World'});
	});

	require('./url')(app);
};