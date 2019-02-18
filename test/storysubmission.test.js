const expect = require('chai').expect;
const should = require('chai').should();
const request = require('supertest');
const app = require('../app');

// note that I need to hardcode the _id for the POST so I create a new post with a given id.
// then I can use that hardcoded _id for the PUT & for the DELETE.
// this means that I am deleting the test object that I create.
// additionally I need to run DELETE after PUT, so that the final step of the test is DELETE

describe('Checks storysubmission CRUD functions', () => {
  it('GET /api/storysubmission checks get all storysubmission', done => {
    request(app)
      .get('/api/storysubmission')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  let successful_Post_Story_Submission_Data = {
    name: 'dummyHAPPYBIRTHDAY',
    email: 'dummy',
    story: 'dummy',
    questionOrComment: 'dummy'
  };

  it('GET /api/storysubmission/:id | checks get an individual podcast', done => {
    request(app)
      .get('/api/storysubmission/5c6929e0a961e66bc215cc91')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('GET /api/storysubmission/:id | checks get an individual podcast with json not found', done => {
    request(app)
      .get('/api/storysubmission/non_existant_id')
      .expect('Content-Type', /text/)
      .expect(500, done); //expecting HTTP status code
  });

  it('POST /api/storysubmission | creates a new podcast', function(done) {
    request(app)
      .post('/api/storysubmission')
      .send(successful_Post_Story_Submission_Data)
      .expect('Content-Type', /json/, done);
  });

  let failed_Post_Story_Submission_Data = {
    // name: 'dummy',
    email: 'dummy',
    story: 'dummy',
    questionOrComment: 'dummy'
  };

  it('POST /api/storysubmission | fails to create a new podcast', function(done) {
    request(app)
      .post('/api/storysubmission')
      .send(failed_Post_Story_Submission_Data)
      .expect('Content-Type', /text/)
      .expect(500, done);
  });
});
