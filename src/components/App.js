import React from 'react';
import StorySubmission from './StorySubmission';
import axios from 'axios';
import UpcomingShows from './UpcomingShows';

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
      console.log(typeof response.data);
      this.setState({
        storysubmission: response.data
      });
      console.log(this.state);
    });
  };

  getUpcomingShowsFromDb = () => {
    axios.get('http://localhost:8000/api/upcomingshows/').then(response => {
      console.log(response);
      this.setState({
        upcomingShows: response.data
      });
      console.log(this.state);
    });
  };

  render() {
    return (
      <div>
        <h1>HELLO FROM APP.JS</h1>
        <StorySubmission storysubmission={this.state.storysubmission} />
        <UpcomingShows upcomingshows={this.state.upcomingShows} />
      </div>
    );
  }
}

export default App;
