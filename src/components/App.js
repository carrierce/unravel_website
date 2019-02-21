import React from 'react';
import StorySubmission from './StorySubmission';
import axios from 'axios';
import UpcomingShows from './UpcomingShows';
import CreateUpcomingShow from './CreateUpcomingShow';
import Podcasts from './Podcasts';

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
    axios.get('http://localhost:8000/api/storysubmission/').then(response => {
      // console.log(typeof response.data);
      this.setState({
        storysubmission: response.data
      });
      // console.log(this.state);
    });
  };

  getUpcomingShowsFromDb = () => {
    axios.get('http://localhost:8000/api/upcomingshows/').then(response => {
      // console.log(response);
      this.setState({
        upcomingShows: response.data
      });
      // console.log(this.state);
    });
  };

  getUpcomingPodcastsFromDb = () => {
    axios.get('http://localhost:8000/api/podcasts/').then(response => {
      this.setState({
        podcasts: response.data
      });
      console.log(this.state.podcasts[0]);
    });
  };

  deleteUpcomingShow = index => {
    axios.delete('http://localhost:8000/api/upcomingshows/' + index);
    console.log('Called deleteUpcomingShow');
  };

  deletePodcast = index => {
    axios.delete('http://localhost:8000/api/podcasts/' + index);
    console.log('Called deleteUpcomingShow');
  };

  postUpcomingShow = upcomingShow => {
    console.log(typeof upcomingShow.posterImageLink);
    axios.post('http://localhost:8000/api/upcomingshows/', {
      posterImageLink: upcomingShow.posterImageLink,
      showDate: upcomingShow.showDate,
      venue: upcomingShow.venue,
      showBlurb: upcomingShow.showBlurb,
      ticketUrl: upcomingShow.ticketUrl
    });
  };

  editUpcomingShow = edittedUpcomingShow => {
    console.log('editUpcomingShow Called');
    console.log(edittedUpcomingShow);
    axios.put(
      'http://localhost:8000/api/upcomingshows/' + edittedUpcomingShow._id,
      {
        posterImageLink: edittedUpcomingShow.posterImageLink,
        showDate: edittedUpcomingShow.showDate,
        venue: edittedUpcomingShow.venue,
        showBlurb: edittedUpcomingShow.showBlurb,
        ticketUrl: edittedUpcomingShow.ticketUrl
      }
    );
  };

  render() {
    return (
      <div>
        <h1>HELLO FROM APP.JS!</h1>
        <Podcasts
          podcasts={this.state.podcasts}
          deletepodcast={this.deletePodcast}
        />
        {/* <CreateUpcomingShow postupcomingshow={this.postUpcomingShow} /> */}
        <br />
        <hr />
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
