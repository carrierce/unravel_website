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
        <h2>{this.props.podcast.podcastName}</h2>
        <h3>{this.props.podcast._id}</h3>
        <div className="ui relaxed divided list">
          <div className="item">
            <div className="header">Name</div>
            <div className="description">{this.props.podcast.podcastName}</div>
          </div>
          <div className="item">
            <div className="header">Blurb</div>
            <div className="description">{this.props.podcast.podcastBlurb}</div>
          </div>
          <div className="item">
            <div className="header">Show Notes</div>
            <div className="description">
              {this.props.podcast.podcastShowNotes}
            </div>
          </div>
          <div className="item">
            <div className="header">Cover Image Link</div>
            <div className="description">
              {this.props.podcast.podcastCoverImageLink}
            </div>
          </div>
          <div className="item">
            <div className="header">Embed Link</div>
            <div className="description">
              {this.props.podcast.podcastEmbedLink}
            </div>
          </div>
        </div>
        <br />
        <button className="positive ui button" onClick={this.handleClick}>
          Edit Podcast
        </button>
        <button
          className="negative ui button"
          onClick={() => this.props.deletepodcast(this.props.podcast._id)}
        >
          Delete Podcast
        </button>
        <div style={{ display: this.state.isToggle ? 'block' : 'none' }}>
          <div className="ui divider" />
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
