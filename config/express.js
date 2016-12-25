// Invoke 'strict' JavaScript mode
'use strict';

var config = require('./config'),
	express = require('express'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	session = require('express-session'),
	flash = require('connect-flash'),
  expressValidator = require('express-validator')
  
  
  module.exports = function() {

		var app = express();
	
		// Use the 'NODE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
		if (process.env.NODE_ENV === 'development') {
			app.use(morgan('dev'));
		} else if (process.env.NODE_ENV === 'production') {
			app.use(compress());
		}
	
		app.use(bodyParser.urlencoded({
			extended: true
		}));
		app.use(bodyParser.json());
		app.use(expressValidator());
		
		
		// Load the routing files
		require('../app/routes/projects.server.routes.js')(app);
		
		
		// Configure static file serving
		app.use(express.static('./public'));
	
		return app;
};