import React from 'react';

class EditPodcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggledforedit: props.toggledforedit,
      _id: props.podcast._id,
      podcastCoverImageLink: props.podcast.podcastCoverImageLink,
      podcastName: props.podcast.podcastName,
      podcastBlurb: props.podcast.podcastBlurb,
      podcastShowNotes: props.podcast.podcastShowNotes,
      podcastEmbedLink: props.podcast.podcastEmbedLink
    };
  }

  componentWillReceiveProps() {
    this.setState({
      _id: this.props.podcast._id,
      podcastCoverImageLink: this.props.podcast.podcastCoverImageLink,
      podcastName: this.props.podcast.podcastName,
      podcastBlurb: this.props.podcast.podcastBlurb,
      podcastShowNotes: this.props.podcast.podcastShowNotes,
      podcastEmbedLink: this.props.podcast.podcastEmbedLink
    });
  }

  formChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.editpodcast(this.state);
    this.props.toggleeditcomponent();
  };

  cancelEdit = () => {
    this.props.toggleeditcomponent();
  };

  render() {
    return (
      <div>
        <h1>Edit Podcast</h1>
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
              rows="3"
              id="podcastShowNotes"
              value={this.state.podcastShowNotes}
              onChange={e => this.formChange(e)}
              placeholder="Show Notes"
            />
          </div>
          <div className="field">
            <label>
              Cover Image Link (Cover image link must be at least 5 characters
              long)
            </label>
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
            Submit Updated Podcast
          </button>
          <button
            className="ui primary button"
            onClick={e => this.cancelEdit()}
          >
            Discard Edits
          </button>
        </form>
      </div>
    );
  }
}

export default EditPodcast;
