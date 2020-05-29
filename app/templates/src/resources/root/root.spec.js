'use strict';

const app = require('../../server');
const request = require('supertest').agent(app.listen());

const expect = require('chai').expect;
const should = require('should');

describe('GET /', function () {
    it('should respond with 403', function (done) {
        request.get('/').expect(403, done);
    });
});
