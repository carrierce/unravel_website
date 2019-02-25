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
      <div className="ui segment">
        <h2>Create New Podcast</h2>
        <form className="ui form" onSubmit={() => this.submitForm()}>
          <div className="field">
            <label>Episode Title</label>
            <input
              id="podcastName"
              value={this.state.podcastName}
              onChange={e => this.formChange(e)}
              placeholder="Episode Title"
            />
          </div>
          <div className="field">
            <label>Blurb</label>
            <textarea
              rows="2"
              id="podcastBlurb"
              value={this.state.podcastBlurb}
              onChange={e => this.formChange(e)}
              placeholder="Blurb"
            />
          </div>
          <div className="field">
            <label>Show Notes</label>
            <textarea
              id="podcastShowNotes"
              value={this.state.podcastShowNotes}
              onChange={e => this.formChange(e)}
              placeholder="Show Notes"
            />
          </div>
          <div className="field">
            <label>Cover Image Link</label>
            <input
              id="podcastCoverImageLink"
              value={this.state.podcastCoverImageLink}
              onChange={e => this.formChange(e)}
              placeholder="Cover Image Link"
            />
          </div>
          <div className="field">
            <label>Podcast Embed Link</label>
            <input
              id="podcastEmbedLink"
              value={this.state.podcastEmbedLink}
              onChange={e => this.formChange(e)}
              placeholder="Podcast Embed Link"
            />
          </div>
          <button
            className="positive ui button"
            onClick={e => this.submitForm(e)}
          >
            Submit New Podcast
          </button>
        </form>
      </div>
    );
  }
}

export default CreatePodcast;
