"use strict";

// Get list of roots
module.exports = {
    index: async ctx => {
        ctx.status = 403;
        ctx.body = {
            name: "{{API_NAME}}",
            info: "{{API_PORTAL}}"
        };
    }
};
