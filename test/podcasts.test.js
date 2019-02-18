const expect = require('chai').expect;
const should = require('chai').should();
const request = require('supertest');
const app = require('../app');

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
    podcastName: 'dummy',
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

  it('DELETE /api/podcasts | deletes an existing podcast', function(done) {
    request(app)
      .delete('/api/podcasts/5c6939db70b3037c9a5d9fa')
      .expect('Content-Type', /text/, done);
  });

  it('DELETE /api/podcasts | fails to deletes an existing podcast-podcast not found', function(done) {
    request(app)
      .delete('/api/podcasts/non_existant_id')
      .expect('Content-Type', /text/)
      .expect(500, done);
  });

  let successful_Put_Podcast_Data = {
    podcastCoverImageLink: 'dummy_update',
    podcastName: 'dummy_update',
    podcastBlurb: 'dummy_update',
    podcastShowNotes: 'dummy_update',
    podcastEmbedLink: 'dummy_update'
  };

  it('PUT /api/podcasts | updates an existing podcast', function(done) {
    request(app)
      .put('/api/podcasts/5c6939db70b3037c9a5d9fa')
      .send(successful_Put_Podcast_Data)
      .expect('Content-Type', /text/, done);
  });

  let failed_Put_Podcast_Data = {
    // podcastCoverImageLink: 'dummy_update',
    podcastName: 'dummy_update',
    podcastBlurb: 'dummy_update',
    podcastShowNotes: 'dummy_update',
    podcastEmbedLink: 'dummy_update'
  };

  it('PUT /api/podcasts | fails to update an existing podcast', function(done) {
    request(app)
      .put('/api/podcasts/5c6939db70b3037c9a5d9fa')
      .send(successful_Put_Podcast_Data)
      .expect('Content-Type', /text/)
      .expect(500, done);
  });
});
