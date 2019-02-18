const expect = require('chai').expect;
const should = require('chai').should();
const request = require('supertest');
const app = require('../app');

describe('Checks UpcomingShows CRUD functions', () => {
  it('GET upcomingshows checks get all upcomingshows', done => {
    request(app)
      .get('/api/upcomingshows')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('GET /api/upcomingshows/:id | checks get an individual upcomingshows', done => {
    request(app)
      .get('/api/upcomingshows/5c67f116523d44da9f1dcfbd')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('GET /api/upcomingshows/:id | checks get an individual upcomingshows with json not found', done => {
    request(app)
      .get('/api/upcomingshows/non_existant_id')
      .expect('Content-Type', /text/)
      .expect(500, done); //expecting HTTP status code
  });

  let successful_Post_Upcoming_Shows_Data = {
    _id: '5c67f0fb523d44da9f1dcfbb',
    posterImageLink: 'dummy',
    showDate: new Date(),
    venue: 'dummy',
    showBlurb: 'dummy',
    ticketUrl: 'dummy'
  };

  it('POST /api/upcomingshows | creates a new upcomingshows', function(done) {
    request(app)
      .post('/api/upcomingshows')
      .send(successful_Post_Upcoming_Shows_Data)
      .expect('Content-Type', /json/, done);
  });

  let failed_Post_Upcoming_Shows_Data = {
    // posterImageLink: 'dummy',
    showDate: new Date(),
    venue: 'dummy',
    showBlurb: 'dummy',
    ticketUrl: 'dummy'
  };

  it('POST /api/upcomingshows | fails to create a new upcomingshows', function(done) {
    request(app)
      .post('/api/upcomingshows')
      .send(failed_Post_Upcoming_Shows_Data)
      .expect('Content-Type', /text/)
      .expect(500, done);
  });

  let successful_Put_Upcoming_Show_Data = {
    upcomingshowsCoverImageLink: 'dummy_update',
    upcomingshowsName: 'dummy_update',
    upcomingshowsBlurb: 'dummy_update',
    upcomingshowshowNotes: 'dummy_update',
    upcomingshowsEmbedLink: 'dummy_update'
  };

  it('PUT /api/upcomingshows | updates an existing upcomingshows', function(done) {
    request(app)
      .put('/api/upcomingshows/5c67f0fb523d44da9f1dcfbb')
      .send(successful_Put_Upcoming_Show_Data)
      .expect('Content-Type', /json/, done);
  });

  it('PUT /api/upcomingshows | fails to update an existing upcomingshows', function(done) {
    request(app)
      .put('/api/upcomingshows/no_endpoint')
      .send(successful_Put_Upcoming_Show_Data)
      .expect('Content-Type', /text/)
      .expect(500, done);
  });

  it('DELETE /api/upcomingshows | deletes an existing upcomingshows', function(done) {
    request(app)
      .delete('/api/upcomingshows/5c67f0fb523d44da9f1dcfbb')
      .expect('Content-Type', /json/, done);
  });

  it('DELETE /api/upcomingshows | fails to deletes an existing upcomingshows-upcomingshows not found', function(done) {
    request(app)
      .delete('/api/upcomingshows/non-existant-id')
      .expect('Content-Type', /text/)
      .expect(500, done);
  });
});
