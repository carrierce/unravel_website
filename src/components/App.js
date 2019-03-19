import React from 'react';
import './App.css';
import UpcomingShows from './api/upcomingshows/UpcomingShows';
import Podcasts from './api/podcasts/Podcasts';
import PastShows from './api/pastshows/PastShows';
import StorySubmissions from './api/storysubmissions/StorySubmissions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ImpactForms from './api/impacts/ImpactForms';
import Mobile from './mobile/Mobile';
import ApiNavBar from './api/apinavbar';
import api from './api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [],
      storysubmissions: [],
      upcomingShows: [],
      podcasts: [],
      pastshows: [],
      impactforms: [],
      showConfirmDeleteModal: false
    };
  }

  componentWillMount() {
    this.getUpcomingShowsFromDb();
    this.getUpcomingPodcastsFromDb();
    this.getPastShowsFromDb();
    this.getStorySubmissionsFromDb();
    this.getImpactFormsFromDb();
  }

  // do i need componentDidMount?
  componentDidMount() {
    this.getUpcomingShowsFromDb();
    this.getUpcomingPodcastsFromDb();
    this.getPastShowsFromDb();
    this.getStorySubmissionsFromDb();
    this.getImpactFormsFromDb();
  }

  getStorySubmissionsFromDb = () => {
    api.get('/api/storysubmission/').then(response => {
      this.setState({
        storysubmissions: response.data
      });
    });
  };

  getImpactFormsFromDb = () => {
    api.get('/api/impactform/').then(response => {
      this.setState({
        impactforms: response.data
      });
    });
  };

  getUpcomingShowsFromDb = () => {
    api.get('/api/upcomingshows/').then(response => {
      this.setState({
        upcomingShows: response.data
      });
    });
  };

  getUpcomingPodcastsFromDb = () => {
    api.get('/api/podcasts/').then(response => {
      this.setState({
        podcasts: response.data
      });
    });
  };

  getPastShowsFromDb = () => {
    api.get('/api/pastshows/').then(response => {
      this.setState({
        pastshows: response.data
      });
    });
  };

  deleteStorySubmission = index => {
    api.delete('/api/storysubmission/' + index).then(() => {
      this.getStorySubmissionsFromDb();
    });
  };

  deleteImpactForm = index => {
    api.delete('/api/impactform/' + index).then(() => {
      this.getImpactFormsFromDb();
    });
  };

  deleteUpcomingShow = index => {
    api.delete('/api/upcomingshows/' + index).then(() => {
      this.getUpcomingShowsFromDb();
    });
  };

  deletePodcast = index => {
    api.delete('/api/podcasts/' + index).then(() => {
      this.getUpcomingPodcastsFromDb();
    });
  };

  deletePastShow = index => {
    api.delete('/api/pastshows/' + index).then(() => {
      this.getPastShowsFromDb();
    });
  };

  postStorySubmission = storysubmission => {
    api
      .post('/api/storysubmission/', {
        name: storysubmission.name,
        email: storysubmission.email,
        story: storysubmission.story,
        questionOrComment: storysubmission.questionOrComment
      })
      .then(response => {
        this.setState({
          storysubmissions: [...this.state.storysubmissions, response.data]
        });
      });
  };

  postImpactForm = impactform => {
    api
      .post('/api/impactform/', {
        name: impactform.name,
        email: impactform.email,
        organization: impactform.organization,
        message: impactform.message
      })
      .then(response => {
        this.setState({
          impactforms: [...this.state.impactforms, response.data]
        });
      });
  };

  postUpcomingShow = upcomingShow => {
    api
      .post('/api/upcomingshows/', {
        posterImageLink: upcomingShow.posterImageLink,
        venue: upcomingShow.venue,
        showBlurb: upcomingShow.showBlurb,
        ticketUrl: upcomingShow.ticketUrl,
        showDateTime: upcomingShow.showDateTime,
        showTitle: upcomingShow.showTitle
      })
      .then(response => {
        this.setState({
          upcomingShows: [...this.state.upcomingShows, response.data]
        });
      });
  };

  postPodcast = podcast => {
    api
      .post('/api/podcasts/', {
        podcastCoverImageLink: podcast.podcastCoverImageLink,
        podcastName: podcast.podcastName,
        podcastBlurb: podcast.podcastBlurb,
        podcastShowNotes: podcast.podcastShowNotes,
        podcastEmbedLink: podcast.podcastEmbedLink
      })
      .then(response => {
        this.setState({ podcasts: [...this.state.podcasts, response.data] });
      });
  };
  postPastShow = pastshow => {
    api
      .post('/api/pastshows/', {
        photoImageLink: pastshow.photoImageLink,
        showDate: pastshow.showDate,
        venue: pastshow.venue,
        showTitle: pastshow.showTitle
      })
      .then(response => {
        this.setState({ pastshows: [...this.state.pastshows, response.data] });
      });
  };

  editStorySubmission = edittedStorySubmission => {
    api
      .put('/api/storysubmission/' + edittedStorySubmission._id, {
        name: edittedStorySubmission.name,
        email: edittedStorySubmission.email,
        story: edittedStorySubmission.story,
        questionOrComment: edittedStorySubmission.questionOrComment
      })
      .then(() => {
        this.getStorySubmissionsFromDb();
      });
  };

  editImpactForm = edittedImpactForm => {
    api
      .put('/api/impactform/' + edittedImpactForm._id, {
        name: edittedImpactForm.name,
        email: edittedImpactForm.email,
        organization: edittedImpactForm.organization,
        message: edittedImpactForm.message
      })
      .then(() => {
        this.getImpactFormsFromDb();
      });
  };

  editUpcomingShow = edittedUpcomingShow => {
    api
      .put('/api/upcomingshows/' + edittedUpcomingShow._id, {
        showTitle: edittedUpcomingShow.showTitle,
        posterImageLink: edittedUpcomingShow.posterImageLink,
        showDateTime: edittedUpcomingShow.showDateTime,
        venue: edittedUpcomingShow.venue,
        showBlurb: edittedUpcomingShow.showBlurb,
        ticketUrl: edittedUpcomingShow.ticketUrl
      })
      .then(() => {
        this.getUpcomingShowsFromDb();
      });
  };

  editPodcast = edittedPodcast => {
    api
      .put('/api/podcasts/' + edittedPodcast._id, {
        podcastCoverImageLink: edittedPodcast.podcastCoverImageLink,
        podcastName: edittedPodcast.podcastName,
        podcastBlurb: edittedPodcast.podcastBlurb,
        podcastShowNotes: edittedPodcast.podcastShowNotes,
        podcastEmbedLink: edittedPodcast.podcastEmbedLink
      })
      .then(() => {
        this.getUpcomingPodcastsFromDb();
      });
  };

  editPastShow = edittedPastShow => {
    api
      .put('/api/pastshows/' + edittedPastShow._id, {
        photoImageLink: edittedPastShow.photoImageLink,
        showDate: edittedPastShow.showDate,
        venue: edittedPastShow.venue,
        showTitle: edittedPastShow.showTitle
      })
      .then(() => {
        this.getPastShowsFromDb();
      });
  };
  render() {
    return (
      <Router>
        <div className="ui container">
          <div>
            <Switch>
              <Route
                exact
                path={['/', '/mobile']}
                render={() => (
                  <Mobile
                    pastshows={this.state.pastshows}
                    upcomingshows={this.state.upcomingShows}
                    poststorysubmission={this.postStorySubmission}
                  />
                )}
              />
              <Route
                path="/cms/podcasts"
                render={() => (
                  <div>
                    <ApiNavBar />
                    <Podcasts
                      className="ui segment"
                      podcasts={this.state.podcasts}
                      postpodcast={this.postPodcast}
                      deletepodcast={this.deletePodcast}
                      editpodcast={this.editPodcast}
                      getpodcastsfromdb={this.getUpcomingPodcastsFromDb}
                    />
                  </div>
                )}
              />
              <Route
                path="/cms/upcomingshows"
                render={() => (
                  <div>
                    <ApiNavBar />
                    <UpcomingShows
                      className="ui segment"
                      upcomingshows={this.state.upcomingShows}
                      postupcomingshow={this.postUpcomingShow}
                      deleteupcomingshow={this.deleteUpcomingShow}
                      editupcomingshow={this.editUpcomingShow}
                      getupcomingshowsfromdb={this.getUpcomingShowsFromDb}
                    />
                  </div>
                )}
              />
              <Route
                path="/cms/pastshows"
                render={() => (
                  <div>
                    <ApiNavBar />
                    <PastShows
                      className="ui segment"
                      pastshows={this.state.pastshows}
                      postpastshow={this.postPastShow}
                      deletepastshow={this.deletePastShow}
                      editpastshow={this.editPastShow}
                      getpastshowsfromdb={this.getPastShowsFromDb}
                    />
                  </div>
                )}
              />
              <Route
                path="/cms/storysubmissions"
                render={() => (
                  <div>
                    <ApiNavBar />
                    <StorySubmissions
                      className="ui segment"
                      storysubmissions={this.state.storysubmissions}
                      poststorysubmission={this.postStorySubmission}
                      deletestorysubmission={this.deleteStorySubmission}
                      editstorysubmission={this.editStorySubmission}
                      getstorysubmissionsfromdb={this.getStorySubmissionsFromDb}
                    />
                  </div>
                )}
              />
              <Route
                path="/cms/impact"
                render={() => (
                  <div>
                    <ApiNavBar />
                    <ImpactForms
                      className="ui segment"
                      impactforms={this.state.impactforms}
                      postimpactform={this.postImpactForm}
                      deleteimpactform={this.deleteImpactForm}
                      editimpactform={this.editImpactForm}
                      getimpactformsfromdb={this.getImpactFormsFromDb}
                    />
                  </div>
                )}
              />
              <Route
                render={() => (
                  <Mobile
                    pastshows={this.state.pastshows}
                    upcomingshows={this.state.upcomingShows}
                    poststorysubmission={this.postStorySubmission}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
