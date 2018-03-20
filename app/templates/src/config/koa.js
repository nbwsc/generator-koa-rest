/**
 * Koa config
 */

"use strict";
const fs = require("fs");
const config = require("./environment");
const morgan = require("koa-morgan");
const accessLogStream = fs.createWriteStream(__dirname + "/access.log", {
    flags: "a"
});
const bodyParser = require("koa-bodyparser");
const cors = require("kcors");

module.exports = function(app) {
    app.use(cors());
    app.use(bodyParser());
    // Logger
    // app.use(morgan.middleware(config.logType));
    app.use(morgan(config.logType, { stream: accessLogStream }));
};
