"use strict";

const app = require("../../server");
const request = require("supertest").agent(app.listen());

const expect = require("chai").expect;
const should = require("should");

describe("GET /{{RESOURCE_NAME}}", function () {
    it("should respond with 200 type Array", function (done) {
        request.get("/{{RESOURCE_NAME}}").expect(200, function (err, res) {
            expect(Array.isArray(res.body)).to.be.true;
            done();
        });
    });
});
