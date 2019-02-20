import React from 'react';
import StorySubmission from './StorySubmission';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [],
      storysubmission: []
    };
  }

  componentDidMount() {
    this.getDataFromDb();
  }

  getDataFromDb = () => {
    axios.get('http://localhost:8000/api/storysubmission/').then(response => {
      console.log(typeof response.data);
      this.setState({
        storysubmission: response.data
      });
      console.log(this.state);
    });
  };

  render() {
    return (
      <div>
        <h1>HELLO FROM APP.JS</h1>
        <StorySubmission storysubmission={this.state.storysubmission} />
      </div>
    );
  }
}

export default App;
