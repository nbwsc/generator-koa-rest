/**
 * Koa config
 */

'use strict';
const fs = require('fs')
const config = require('./environment');
const morgan = require('koa-morgan');
const accessLogStream = fs.createWriteStream(__dirname + '/access.log',
    { flags: 'a' })
module.exports = function (app) {

    // Logger 
    // app.use(morgan.middleware(config.logType));
    app.use(morgan(config.logType, { stream: accessLogStream }))
};