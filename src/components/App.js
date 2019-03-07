import React from 'react';
import axios from 'axios';
import UpcomingShows from './upcomingshows/UpcomingShows';
import Podcasts from './podcasts/Podcasts';
import PastShows from './pastshows/PastShows';
import StorySubmissions from './storysubmissions/StorySubmissions';
import { Link, Route, Switch } from 'react-router-dom';
import ImpactForms from './impacts/ImpactForms';
import MobileHomePage from './mobile/homepage/MobileHomePage';

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
        showDate: upcomingShow.showDate,
        venue: upcomingShow.venue,
        showBlurb: upcomingShow.showBlurb,
        ticketUrl: upcomingShow.ticketUrl
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
        venue: pastshow.venue
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
          showDate: edittedUpcomingShow.showDate,
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
        venue: edittedPastShow.venue
      })
      .then(() => {
        this.getPastShowsFromDb();
      });
  };
  render() {
    return (
      <div className="ui container">
        {/* <div className="ui inverted menu">
          <div className="middle aligned left menu">
            <h2 className="item">Unravel CMS</h2>
          </div>
          <ul className="right menu">
            <li className="item">
              <Link to="/mobile/homepage">MobileHomePage</Link>
            </li>
            <li className="item">
              <Link to="/">Podcasts</Link>
            </li>
            <li className="item">
              <Link to="/upcomingshows">Upcoming Shows</Link>
            </li>
            <li className="item">
              <Link to="/pastshows">Past Shows</Link>
            </li>
            <li className="item">
              <Link to="/storysubmissions">Story Submission</Link>
            </li>
            <li className="item">
              <Link to="/impact">Impact</Link>
            </li>
          </ul>
        </div> */}
        <div>
          <Route path="/mobile/homepage" render={() => <MobileHomePage />} />
          <Route
            exact
            path="/"
            render={() => (
              <Podcasts
                className="ui segment"
                podcasts={this.state.podcasts}
                postpodcast={this.postPodcast}
                deletepodcast={this.deletePodcast}
                editpodcast={this.editPodcast}
                getpodcastsfromdb={this.getUpcomingPodcastsFromDb}
              />
            )}
          />
          <Route
            path="/upcomingshows"
            render={() => (
              <UpcomingShows
                className="ui segment"
                upcomingshows={this.state.upcomingShows}
                postupcomingshow={this.postUpcomingShow}
                deleteupcomingshow={this.deleteUpcomingShow}
                editupcomingshow={this.editUpcomingShow}
                getupcomingshowsfromdb={this.getUpcomingShowsFromDb}
              />
            )}
          />
          <Route
            path="/pastshows"
            render={() => (
              <PastShows
                className="ui segment"
                pastshows={this.state.pastshows}
                postpastshow={this.postPastShow}
                deletepastshow={this.deletePastShow}
                editpastshow={this.editPastShow}
                getpastshowsfromdb={this.getPastShowsFromDb}
              />
            )}
          />
          <Route
            path="/storysubmissions"
            render={() => (
              <StorySubmissions
                className="ui segment"
                storysubmissions={this.state.storysubmissions}
                poststorysubmission={this.postStorySubmission}
                deletestorysubmission={this.deleteStorySubmission}
                editstorysubmission={this.editStorySubmission}
                getstorysubmissionsfromdb={this.getStorySubmissionsFromDb}
              />
            )}
          />
          <Route
            path="/impact"
            render={() => (
              <ImpactForms
                className="ui segment"
                impactforms={this.state.impactforms}
                postimpactform={this.postImpactForm}
                deleteimpactform={this.deleteImpactForm}
                editimpactform={this.editImpactForm}
                getimpactformsfromdb={this.getImpactFormsFromDb}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
