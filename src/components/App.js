import React from 'react';
import StorySubmission from './StorySubmission';
import axios from 'axios';
import UpcomingShows from './upcomingshows/UpcomingShows';
import CreateUpcomingShow from './upcomingshows/CreateUpcomingShow';
import Podcasts from './podcasts/Podcasts';
import CreatePodcast from './podcasts/CreatePodcast';
import EditPodcast from './podcasts/EditPodcast';
import PastShows from './pastshows/PastShows';
import ConfirmDelete from './modals/ConfirmDelete';
import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [],
      storysubmission: [],
      upcomingShows: [],
      podcasts: [],
      pastshows: [],
      showConfirmDeleteModal: false
    };
  }

  componentWillMount() {
    this.getUpcomingShowsFromDb();
    this.getUpcomingPodcastsFromDb();
    this.getPastShowsFromDb();
  }

  // do i need componentDidMount?
  componentDidMount() {
    this.getUpcomingShowsFromDb();
    this.getUpcomingPodcastsFromDb();
    this.getPastShowsFromDb();
  }

  getStoryDataFromDb = () => {
    axios.get('http://localhost:5000/api/storysubmission/').then(response => {
      this.setState({
        storysubmission: response.data
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
        <div className="ui inverted menu">
          <div className="middle aligned left menu">
            <h2 className="item">Unravel CMS</h2>
          </div>
          <ul className="right menu">
            <li className="item">
              <Link to="/">Podcasts</Link>
            </li>
            <li className="item">
              <Link to="/upcomingshows">Upcoming Shows</Link>
            </li>
            <li className="item">
              <Link to="/impact">Impact</Link>
            </li>
            <li className="item">
              <Link to="/pastshows">Past Shows</Link>
            </li>
            <li className="item">
              <Link to="/storysubmission">Story Submission</Link>
            </li>
          </ul>
        </div>
        <div>
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
        </div>
      </div>
    );
  }
}

export default App;
