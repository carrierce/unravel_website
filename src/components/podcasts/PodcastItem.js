import React from 'react';
import EditPodcast from './EditPodcast';
import ConfirmDelete from '../modals/ConfirmDelete';

class PodcastItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
      isToggleForEditPodcast: false
    };
  }

  handleClick = () => {
    console.log('handleclick is called!!');
    this.props.getpodcastsfromdb();
    this.setState({
      isToggle: !this.state.isToggle,
      isToggleForEditPodcast: !this.state.isToggleForEditPodcast
    });
  };

  render() {
    return (
      <div key={this.props.index}>
        <h2>{this.props.podcast.podcastName}</h2>
        <div
          style={{ display: this.state.isToggle ? 'none' : 'block' }}
          className="ui relaxed divided list"
        >
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
        <div
          style={{ display: this.state.isToggle ? 'none' : 'block' }}
          className="ui relaxed divided list"
        >
          <button className="positive ui button" onClick={this.handleClick}>
            Edit Podcast
          </button>
          <ConfirmDelete
            deletepodcast={this.props.deletepodcast}
            podcast={this.props.podcast}
          />
          {/* <button
            className="negative ui button"
            onClick={() => this.props.deletepodcast(this.props.podcast._id)}
          >
            Delete Podcast
          </button> */}
        </div>
        <div style={{ display: this.state.isToggle ? 'block' : 'none' }}>
          <EditPodcast
            toggledforedit={this.state.isToggleForEditPodcast}
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
