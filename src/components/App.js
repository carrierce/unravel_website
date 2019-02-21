import React from 'react';
import StorySubmission from './StorySubmission';
import axios from 'axios';
import UpcomingShows from './UpcomingShows';
import CreateUpcomingShow from './CreateUpcomingShow';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [],
      storysubmission: [],
      upcomingShows: []
    };
  }

  componentDidMount() {
    // this.getStoryDataFromDb();
    this.getUpcomingShowsFromDb();
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

  deleteUpcomingShow = index => {
    axios.delete('http://localhost:8000/api/upcomingshows/' + index);
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
        {/* <StorySubmission storysubmission={this.state.storysubmission} /> */}
        {/* <CreateUpcomingShow postupcomingshow={this.postUpcomingShow} /> */}
        <br />
        <hr />
        <UpcomingShows
          deleteupcomingshow={this.deleteUpcomingShow}
          upcomingshows={this.state.upcomingShows}
          editupcomingshow={this.editUpcomingShow}
        />
      </div>
    );
  }
}

export default App;
