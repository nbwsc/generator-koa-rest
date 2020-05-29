"use strict";

const controller = require("./{{RESOURCE_NAME}}.controller");
const router = require("koa-router")();

router.get("/", controller.index);
module.exports = router.routes();
