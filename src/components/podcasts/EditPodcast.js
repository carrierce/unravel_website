import React from 'react';

class EditPodcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: props.podcast._id,
      podcastCoverImageLink: props.podcast.podcastCoverImageLink,
      podcastName: props.podcast.podcastName,
      podcastBlurb: props.podcast.podcastBlurb,
      podcastShowNotes: props.podcast.podcastShowNotes,
      podcastEmbedLink: props.podcast.podcastEmbedLink
    };
  }

  formChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.editpodcast(this.state);
  };

  render() {
    return (
      <div>
        <h1>Edit Podcast</h1>
        <form className="ui form" onSubmit={() => this.submitForm()}>
          <h5>
            Edit Podcast(podcastCoverImageLink needs to be at least 5 characters
            longs)
          </h5>
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
            <input
              id="podcastBlurb"
              value={this.state.podcastBlurb}
              onChange={e => this.formChange(e)}
              placeholder="Blurb"
            />
          </div>
          <div className="field">
            <label>Show Notes</label>
            <input
              id="podcastShowNotes"
              value={this.state.podcastShowNotes}
              onChange={e => this.formChange(e)}
              placeholder="Show Notes"
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
            Updated Podcast Submit
          </button>
          <button
            className="negative ui button"
            onClick={() => this.props.deletepodcast(this.state._id)}
          >
            Delete Podcast
          </button>
        </form>
      </div>
    );
  }
}

export default EditPodcast;
