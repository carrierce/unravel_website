const expect = require('chai').expect;
const should = require('chai').should();
const request = require('supertest');
const app = require('../app');

// note that I need to hardcode the _id for the POST so I create a new post with a given id.
// then I can use that hardcoded _id for the PUT & for the DELETE.
// this means that I am deleting the test object that I create.
// additionally I need to run DELETE after PUT, so that the final step of the test is DELETE

describe('Checks Podcasts CRUD functions', () => {
  it('GET /api/podcasts checks get all podcasts', done => {
    request(app)
      .get('/api/podcasts')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('GET /api/podcasts/:id | checks get an individual podcast', done => {
    request(app)
      .get('/api/podcasts/5c6939db70b3037c9a5d9fa8')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('GET /api/podcasts/:id | checks get an individual podcast with json not found', done => {
    request(app)
      .get('/api/podcasts/non_existant_id')
      .expect('Content-Type', /text/)
      .expect(500, done); //expecting HTTP status code
  });

  let successful_Post_Podcast_Data = {
    _id: '5c6939db70b3037c9a5d9fa8',
    podcastCoverImageLink: 'dummy',
    podcastName: 'dummy',
    podcastBlurb: 'dummy',
    podcastShowNotes: 'dummy',
    podcastEmbedLink: 'dummy'
  };

  it('POST /api/podcasts | creates a new podcast', function(done) {
    request(app)
      .post('/api/podcasts')
      .send(successful_Post_Podcast_Data)
      .expect('Content-Type', /json/, done);
  });

  let failed_Post_Podcast_Data = {
    // podcastCoverImageLink: 'dummy',
    podcastName: 'dummyXXXXXX',
    podcastBlurb: 'dummy',
    podcastShowNotes: 'dummy',
    podcastEmbedLink: 'dummy'
  };

  it('POST /api/podcasts | fails to create a new podcast', function(done) {
    request(app)
      .post('/api/podcasts')
      .send(failed_Post_Podcast_Data)
      .expect('Content-Type', /text/)
      .expect(500, done);
  });

  let dummy_Put_Podcast_Data = {
    podcastCoverImageLink: 'dummy_update',
    podcastName: 'dummy_update',
    podcastBlurb: 'dummy_update',
    podcastShowNotes: 'dummy_update',
    podcastEmbedLink: 'dummy_update'
  };

  it('PUT /api/podcasts | updates an existing podcast', function(done) {
    request(app)
      .put('/api/podcasts/5c6939db70b3037c9a5d9fa8')
      .send(dummy_Put_Podcast_Data)
      .expect('Content-Type', /json/, done);
  });

  it('PUT /api/podcasts | fails to update an existing podcast', function(done) {
    request(app)
      .put('/api/podcasts/not_an_id')
      .send(dummy_Put_Podcast_Data)
      .expect('Content-Type', /text/)
      .expect(500, done);
  });

  it('DELETE /api/podcasts | deletes an existing podcast', function(done) {
    request(app)
      .delete('/api/podcasts/5c6939db70b3037c9a5d9fa8')
      .expect('Content-Type', /json/, done);
  });

  it('DELETE /api/podcasts | fails to deletes an existing podcast-podcast not found', function(done) {
    request(app)
      .delete('/api/podcasts/non_existant_id')
      .expect('Content-Type', /text/)
      .expect(500, done);
  });
});
