import React from 'react';
import EditPodcast from './EditPodcast';

class PodcastItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false
    };
  }

  handleClick = e => {
    this.setState({ isToggle: !this.state.isToggle });
    console.log(this.state);
  };

  render() {
    return (
      <div key={this.props.index}>
        <div className="ui item">
          <h2>Podcast Data</h2>
          <p>Cover Image Link: {this.props.podcast.podcastCoverImageLink}</p>
          <p>Name: {this.props.podcast.podcastName}</p>
          <p>Blurb: {this.props.podcast.podcastBlurb}</p>
          <p>Show Notes: {this.props.podcast.podcastShowNotes}</p>
          <p>Embed Link: {this.props.podcast.podcastEmbedLink}</p>
        </div>
        <br />
        <button className="positive ui button" onClick={this.handleClick}>
          Edit Podcast
        </button>
        <button
          className="negative ui button"
          onClick={() => this.props.deletepodcast(this.state._id)}
        >
          Delete Podcast
        </button>
        <div className="ui divider" />
        <div style={{ display: this.state.isToggle ? 'block' : 'none' }}>
          <EditPodcast
            toggleeditcomponent={this.handleClick}
            deletepodcast={this.props.deletepodcast}
            editpodcast={this.props.editpodcast}
            podcast={this.props.podcast}
          />
        </div>
      </div>
    );
  }
}

export default PodcastItem;
