import React from 'react';

class CreatePodcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      podcastCoverImageLink: '',
      podcastName: '',
      podcastBlurb: '',
      podcastShowNotes: '',
      podcastEmbedLink: ''
    };
  }
  formChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.postpodcast(this.state);
  };

  render() {
    return (
      <div>
        <h1>Hello from CreateUpcomingShow</h1>
        <form onSubmit={() => this.submitForm()}>
          <h5>Submit Podcast Data</h5>
          <input
            id="podcastCoverImageLink"
            value={this.state.podcastCoverImageLink}
            onChange={e => this.formChange(e)}
            placeholder="podcastCoverImageLink"
          />
          <input
            type="date"
            id="podcastName"
            value={this.state.podcastName}
            onChange={e => this.formChange(e)}
            placeholder="podcastName"
          />
          <input
            id="podcastBlurb"
            value={this.state.podcastBlurb}
            onChange={e => this.formChange(e)}
            placeholder="podcastBlurb"
          />
          <input
            id="podcastShowNotes"
            value={this.state.podcastShowNotes}
            onChange={e => this.formChange(e)}
            placeholder="podcastShowNotes"
          />
          <input
            id="podcastEmbedLink"
            value={this.state.podcastEmbedLink}
            onChange={e => this.formChange(e)}
            placeholder="podcastEmbedLink"
          />
          <button onClick={e => this.submitForm(e)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreatePodcast;
