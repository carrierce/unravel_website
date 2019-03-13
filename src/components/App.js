import React from 'react';
import './App.css';
import axios from 'axios';
import UpcomingShows from './api/upcomingshows/UpcomingShows';
import Podcasts from './api/podcasts/Podcasts';
import PastShows from './api/pastshows/PastShows';
import StorySubmissions from './api/storysubmissions/StorySubmissions';
import { Route } from 'react-router-dom';
import ImpactForms from './api/impacts/ImpactForms';
import Mobile from './mobile/Mobile';
import ApiNavBar from './api/apinavbar';

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
    axios.get('http://localhost:5000/api/storysubmission/').then(response => {
      this.setState({
        storysubmissions: response.data
      });
    });
  };

  getImpactFormsFromDb = () => {
    axios.get('http://localhost:5000/api/impactform/').then(response => {
      this.setState({
        impactforms: response.data
      });
    });
  };

  getUpcomingShowsFromDb = () => {
    axios.get('http://localhost:5000/api/upcomingshows/').then(response => {
      this.setState({
        upcomingShows: response.data
      });
    });
  };

  getUpcomingPodcastsFromDb = () => {
    axios.get('http://localhost:5000/api/podcasts/').then(response => {
      this.setState({
        podcasts: response.data
      });
    });
  };

  getPastShowsFromDb = () => {
    axios.get('http://localhost:5000/api/pastshows/').then(response => {
      this.setState({
        pastshows: response.data
      });
    });
  };

  deleteStorySubmission = index => {
    axios
      .delete('http://localhost:5000/api/storysubmission/' + index)
      .then(() => {
        this.getStorySubmissionsFromDb();
      });
  };

  deleteImpactForm = index => {
    axios.delete('http://localhost:5000/api/impactform/' + index).then(() => {
      this.getImpactFormsFromDb();
    });
  };

  deleteUpcomingShow = index => {
    axios
      .delete('http://localhost:5000/api/upcomingshows/' + index)
      .then(() => {
        this.getUpcomingShowsFromDb();
      });
  };

  deletePodcast = index => {
    axios.delete('http://localhost:5000/api/podcasts/' + index).then(() => {
      this.getUpcomingPodcastsFromDb();
    });
  };

  deletePastShow = index => {
    axios.delete('http://localhost:5000/api/pastshows/' + index).then(() => {
      this.getPastShowsFromDb();
    });
  };

  postStorySubmission = storysubmission => {
    axios
      .post('http://localhost:5000/api/storysubmission/', {
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
    axios
      .post('http://localhost:5000/api/impactform/', {
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
    axios
      .post('http://localhost:5000/api/upcomingshows/', {
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
    axios
      .post('http://localhost:5000/api/podcasts/', {
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
    axios
      .post('http://localhost:5000/api/pastshows/', {
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
    axios
      .put(
        'http://localhost:5000/api/storysubmission/' +
          edittedStorySubmission._id,
        {
          name: edittedStorySubmission.name,
          email: edittedStorySubmission.email,
          story: edittedStorySubmission.story,
          questionOrComment: edittedStorySubmission.questionOrComment
        }
      )
      .then(() => {
        this.getStorySubmissionsFromDb();
      });
  };

  editImpactForm = edittedImpactForm => {
    axios
      .put('http://localhost:5000/api/impactform/' + edittedImpactForm._id, {
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
    axios
      .put(
        'http://localhost:5000/api/upcomingshows/' + edittedUpcomingShow._id,
        {
          posterImageLink: edittedUpcomingShow.posterImageLink,
          showDateTime: edittedUpcomingShow.showDateTime,
          venue: edittedUpcomingShow.venue,
          showBlurb: edittedUpcomingShow.showBlurb,
          ticketUrl: edittedUpcomingShow.ticketUrl
        }
      )
      .then(() => {
        this.getUpcomingShowsFromDb();
      });
  };

  editPodcast = edittedPodcast => {
    axios
      .put('http://localhost:5000/api/podcasts/' + edittedPodcast._id, {
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
    axios
      .put('http://localhost:5000/api/pastshows/' + edittedPastShow._id, {
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
      <div className="ui container">
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <Mobile
                pastshows={this.state.pastshows}
                upcomingshows={this.state.upcomingShows}
              />
            )}
          />
          <Route
            // exact
            path="/api/podcasts"
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
            path="/api/upcomingshows"
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
            path="/api/pastshows"
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
            path="/api/storysubmissions"
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
            path="/api/impact"
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
        </div>
      </div>
    );
  }
}

export default App;
