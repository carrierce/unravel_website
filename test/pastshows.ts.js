const expect = require('chai').expect;
const should = require('chai').should();
const request = require('supertest');
const app = require('../app');

describe('Checks pastshows CRUD functions', () => {
  it('GET pastshows checks get all pastshows', done => {
    request(app)
      .get('/api/pastshows')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('GET /api/pastshows/:id | checks get an individual pastshows', done => {
    request(app)
      .get('/api/pastshows/5c67f116523d44da9f1dcfbd')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('GET /api/pastshows/:id | checks get an individual pastshows with json not found', done => {
    request(app)
      .get('/api/pastshows/non_existant_id')
      .expect('Content-Type', /text/)
      .expect(500, done); //expecting HTTP status code
  });

  let successful_Post_Past_Shows_Data = {
    _id: '5c67f0fb523d44da9f1dcfbb',
    photoImageLink: 'dummy',
    showDate: new Date(),
    venue: 'dummy'
  };

  it('POST /api/pastshows | creates a new pastshows', function(done) {
    request(app)
      .post('/api/pastshows')
      .send(successful_Post_Past_Shows_Data)
      .expect('Content-Type', /json/, done);
  });

  let failed_Post_Past_Shows_Data = {
    // photoImageLink: 'dummy',
    showDate: new Date(),
    venue: 'dummy'
  };

  it('POST /api/pastshows | fails to create a new pastshows', function(done) {
    request(app)
      .post('/api/pastshows')
      .send(failed_Post_Past_Shows_Data)
      .expect('Content-Type', /text/)
      .expect(500, done);
  });

  let successful_Put_Past_Show_Data = {
    pastshowsCoverImageLink: 'dummy_update',
    pastshowsName: 'dummy_update',
    pastshowsBlurb: 'dummy_update',
    pastshowshowNotes: 'dummy_update',
    pastshowsEmbedLink: 'dummy_update'
  };

  it('PUT /api/pastshows | updates an existing pastshows', function(done) {
    request(app)
      .put('/api/pastshows/5c67f0fb523d44da9f1dcfbb')
      .send(successful_Put_Past_Show_Data)
      .expect('Content-Type', /json/, done);
  });

  it('PUT /api/pastshows | fails to update an existing pastshows', function(done) {
    request(app)
      .put('/api/pastshows/no_id')
      .send(successful_Put_Past_Show_Data)
      .expect('Content-Type', /text/)
      .expect(500, done);
  });

  it('DELETE /api/pastshows | deletes an existing pastshows', function(done) {
    request(app)
      .delete('/api/pastshows/5c67f0fb523d44da9f1dcfbb')
      .expect('Content-Type', /json/, done);
  });

  it('DELETE /api/pastshows | fails to deletes an existing pastshows-pastshows not found', function(done) {
    request(app)
      .delete('/api/pastshows/non-existant-id')
      .expect('Content-Type', /text/)
      .expect(500, done);
  });
});
