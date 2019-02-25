import React from 'react';
import StorySubmission from './StorySubmission';
import axios from 'axios';
import UpcomingShows from './upcomingshows/UpcomingShows';
import CreateUpcomingShow from './upcomingshows/CreateUpcomingShow';
import Podcasts from './podcasts/Podcasts';
import CreatePodcast from './podcasts/CreatePodcast';
import EditPodcast from './podcasts/EditPodcast';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [],
      storysubmission: [],
      upcomingShows: [],
      podcasts: []
    };
  }

  componentDidMount() {
    // this.getStoryDataFromDb();
    this.getUpcomingShowsFromDb();
    this.getUpcomingPodcastsFromDb();
  }

  getStoryDataFromDb = () => {
    axios.get('http://localhost:5000/api/storysubmission/').then(response => {
      // console.log(typeof response.data);
      this.setState({
        storysubmission: response.data
      });
      // console.log(this.state);
    });
  };

  getUpcomingShowsFromDb = () => {
    axios.get('http://localhost:5000/api/upcomingshows/').then(response => {
      // console.log(response);
      this.setState({
        upcomingShows: response.data
      });
      // console.log(this.state);
    });
  };

  getUpcomingPodcastsFromDb = () => {
    axios.get('http://localhost:5000/api/podcasts/').then(response => {
      this.setState({
        podcasts: response.data
      });
      console.log(this.state);
    });
  };

  deleteUpcomingShow = index => {
    axios.delete('http://localhost:5000/api/upcomingshows/' + index);
    console.log('Called deleteUpcomingShow');
  };

  deletePodcast = index => {
    axios.delete('http://localhost:5000/api/podcasts/' + index);
    console.log('Called deletePodcast');
  };

  postUpcomingShow = upcomingShow => {
    axios.post('http://localhost:5000/api/upcomingshows/', {
      posterImageLink: upcomingShow.posterImageLink,
      showDate: upcomingShow.showDate,
      venue: upcomingShow.venue,
      showBlurb: upcomingShow.showBlurb,
      ticketUrl: upcomingShow.ticketUrl
    });
  };

  postPodcast = podcast => {
    axios.post('http://localhost:5000/api/podcasts/', {
      podcastCoverImageLink: podcast.podcastCoverImageLink,
      podcastName: podcast.podcastName,
      podcastBlurb: podcast.podcastBlurb,
      podcastShowNotes: podcast.podcastShowNotes,
      podcastEmbedLink: podcast.podcastEmbedLink
    });
  };

  editUpcomingShow = edittedUpcomingShow => {
    console.log('editUpcomingShow Called');
    console.log(edittedUpcomingShow);
    axios.put(
      'http://localhost:5000/api/upcomingshows/' + edittedUpcomingShow._id,
      {
        posterImageLink: edittedUpcomingShow.posterImageLink,
        showDate: edittedUpcomingShow.showDate,
        venue: edittedUpcomingShow.venue,
        showBlurb: edittedUpcomingShow.showBlurb,
        ticketUrl: edittedUpcomingShow.ticketUrl
      }
    );
  };

  editPodcast = edittedPodcast => {
    axios.put('http://localhost:5000/api/podcasts/' + edittedPodcast._id, {
      podcastCoverImageLink: edittedPodcast.podcastCoverImageLink,
      podcastName: edittedPodcast.podcastName,
      podcastBlurb: edittedPodcast.podcastBlurb,
      podcastShowNotes: edittedPodcast.podcastShowNotes,
      podcastEmbedLink: edittedPodcast.podcastEmbedLink
    });
  };

  render() {
    return (
      <div className="ui container">
        <h1>Unravel CMS</h1>

        <Podcasts
          className="ui segment"
          postpodcast={this.postPodcast}
          podcasts={this.state.podcasts}
          deletepodcast={this.deletePodcast}
          editpodcast={this.editPodcast}
        />
        {/* <CreateUpcomingShow postupcomingshow={this.postUpcomingShow} /> */}
        {/* <UpcomingShows
          deleteupcomingshow={this.deleteUpcomingShow}
          upcomingshows={this.state.upcomingShows}
          editupcomingshow={this.editUpcomingShow}
        /> */}
      </div>
    );
  }
}

export default App;
