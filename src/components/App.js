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
      podcasts: [],
      intervalIsSet: false
    };
  }

  componentDidMount() {
    this.getUpcomingShowsFromDb();
    this.getUpcomingPodcastsFromDb();
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

  deleteUpcomingShow = index => {
    axios.delete('http://localhost:5000/api/upcomingshows/' + index);
  };

  deletePodcast = index => {
    axios.delete('http://localhost:5000/api/podcasts/' + index);
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
    axios
      .post('http://localhost:5000/api/podcasts/', {
        podcastCoverImageLink: podcast.podcastCoverImageLink,
        podcastName: podcast.podcastName,
        podcastBlurb: podcast.podcastBlurb,
        podcastShowNotes: podcast.podcastShowNotes,
        podcastEmbedLink: podcast.podcastEmbedLink
      })
      .then(this.setState({ podcasts: [...this.state.podcasts, podcast] }));
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
    console.log('editUpcomingPodcast Called');
    // console.log(edittedPodcast);
    const updatedPodcastIndex = this.state.podcasts.findIndex(
      podcast => podcast._id === edittedPodcast._id
    );
    console.log(updatedPodcastIndex);
    const updatedPodcast = this.state.podcasts.find(
      podcast => podcast._id === edittedPodcast._id
    );
    const updatedPodcasts = [
      ...this.state.podcasts.slice(0, updatedPodcastIndex),
      edittedPodcast,
      ...this.state.podcasts.slice(updatedPodcastIndex + 1)
    ];
    axios
      .put('http://localhost:5000/api/podcasts/' + edittedPodcast._id, {
        podcastCoverImageLink: edittedPodcast.podcastCoverImageLink,
        podcastName: edittedPodcast.podcastName,
        podcastBlurb: edittedPodcast.podcastBlurb,
        podcastShowNotes: edittedPodcast.podcastShowNotes,
        podcastEmbedLink: edittedPodcast.podcastEmbedLink
      })
      .then(this.setState({ podcasts: updatedPodcasts }));
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
