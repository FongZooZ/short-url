const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const ect = require('ect');

const app = express();

// Server listening port
const port = '3000';

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ect');
app.engine('ect', ect({
	watch: true,
	ext: '.ect', // file extension
	root: path.join(__dirname, 'app/views'), // for include layout
	open: '{%',
	close: '%}'
}).render);

// Server logging
app.use(logger('dev'));

// Parse body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// Parse cookie
app.use(cookieParser());

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

// Route handling
require('./app/routes')(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

app.listen(port, () => {
	console.log(`Express server is listen on ${port}`);
});