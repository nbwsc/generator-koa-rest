/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/environment');

// Bootstrap server
const Koa = require('koa');
const app = new Koa();
require('./config/koa')(app);
require('./config/routes')(app);
require('./config/dbconnect.js');

// Start server
if (!module.parent) {
	app.listen(config.port, config.ip, function () {
  	console.log('Koa server listening on %d, in %s mode', config.port, config.env);
	});
}

// Expose app
exports = module.exports = app;