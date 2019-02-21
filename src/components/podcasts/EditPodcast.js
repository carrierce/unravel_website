import React from 'react';

class EditPodcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: props.podcast._id,
      podcastCoverImageLink: props.podcast.posterpodcastCoverImageLinkImageLink,
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
        <h1>Hello from Edit Podcast</h1>
        <form onSubmit={() => this.submitForm()}>
          <h5>
            Edit Upcoming Show Data (poster image url needs to be at least 5
            characters longs)
          </h5>
          <input
            id="podcastCoverImageLink"
            value={this.state.podcastCoverImageLink}
            onChange={e => this.formChange(e)}
            placeholder="podcastCoverImageLink"
          />
          <input
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
        <h5>Hello from Edit Show</h5>
        <h1>{this.props.podcast.podcastCoverImageLink}</h1>
      </div>
    );
  }
}

export default EditPodcast;
