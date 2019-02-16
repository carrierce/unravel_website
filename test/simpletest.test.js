const expect = require('chai').expect;
const should = require('chai').should();
const request = require('supertest');
const utils = require('../server/utils/utils');
const app = require('../app');

describe('Utils functions', () => {
  it('adds two numbers together', () => {
    expect(utils.add(2, 3)).to.be.equal(5);
  });

  it('subtracts one number from another', () => {
    expect(utils.subtract(5, 3)).to.be.equal(2);
  });
});

describe('Fun with arrays and objects', () => {
  it('checks array for value & length is 3', () => {
    const numbers = [1, 2, 3];
    expect(numbers).to.contain(1);
    numbers.should.have.length(3);
  });
});

// note that this test below starts a mock server and so this test would work
// if the server is running anywhere.
describe('Request data', () => {
  it('checks home page', done => {
    request(app)
      .get('/')
      .expect(200)
      .expect({ message: 'Hello ' }, done);
  });
});
