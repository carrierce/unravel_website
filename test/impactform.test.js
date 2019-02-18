const expect = require('chai').expect;
const should = require('chai').should();
const request = require('supertest');
const app = require('../app');

// note that I need to hardcode the _id for the POST so I create a new post with a given id.
// then I can use that hardcoded _id for the PUT & for the DELETE.
// this means that I am deleting the test object that I create.
// additionally I need to run DELETE after PUT, so that the final step of the test is DELETE

describe('Checks impactform CRUD functions', () => {
  it('GET /api/impactform checks get all impactform', done => {
    request(app)
      .get('/api/impactform')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('GET /api/impactform/:id | checks get an individual podcast', done => {
    request(app)
      .get('/api/impactform/5c6939db70b3037c9a5d9fa8')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('GET /api/impactform/:id | checks get an individual podcast with json not found', done => {
    request(app)
      .get('/api/impactform/non_existant_id')
      .expect('Content-Type', /text/)
      .expect(500, done); //expecting HTTP status code
  });

  let successful_Post_Impact_Form_Data = {
    name: 'dummyXXXXXX',
    email: 'dummy',
    organization: 'dummy',
    message: 'dummy'
  };

  it('POST /api/impactform | creates a new podcast', function(done) {
    request(app)
      .post('/api/impactform')
      .send(successful_Post_Impact_Form_Data)
      .expect('Content-Type', /json/, done);
  });

  let failed_Post_Impact_Form_Data = {
    // name: 'dummyXXXXXX',
    email: 'dummy',
    organization: 'dummy',
    message: 'dummy'
  };

  it('POST /api/impactform | fails to create a new podcast', function(done) {
    request(app)
      .post('/api/impactform')
      .send(failed_Post_Impact_Form_Data)
      .expect('Content-Type', /text/)
      .expect(500, done);
  });
});
