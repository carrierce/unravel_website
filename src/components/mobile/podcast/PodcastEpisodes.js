import React from 'react';
const crowd = require('../../../crowd.jpg');

class PodcastEpisodes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: -1
    };
  }

  showMoreEpisodes = () => {
    if (this.state.i > (this.props.podcasts.length + 1) * -1) {
      this.setState({ i: this.state.i - 1 });
    } else {
      return;
    }
  };

  render() {
    let filteredList = this.props.podcasts.slice(this.state.i);
    let renderedList = filteredList.reverse().map((podcast, index) => {
      return (
        <div className="ui grid" key={index}>
          <h3 id="podcastsEpisodeName" className="row">
            {podcast.podcastName}
          </h3>
          <div className="row">
            <img id="podcastEmbedCroppedWidth" src={crowd} />
          </div>
          <p id="podcastsEpisodeBlurb" className="row">
            {podcast.podcastBlurb}
          </p>
          <div id="podcastsPlayer" className="row">
            <img src="https://via.placeholder.com/550x100" />
          </div>
          <h3 id="podcastsShowNotesTitle">Show Notes</h3>
          <p>{podcast.podcastShowNotes}</p>
        </div>
      );
    });
    return (
      <div id="podcastsContainer" className="ui grid">
        <h1 id="podcastsLatestEpisodes" className="row">
          Latest Episodes
        </h1>
        <div className="row">{renderedList}</div>
        {this.state.i == (this.props.podcasts.length + 1) * -1 && (
          <div className="row">
            <h1>No more podcasts</h1>
          </div>
        )}
        <button
          className="row"
          className="ui button"
          id="podcastsShowMorePodcastsButton"
          onClick={this.showMoreEpisodes}
        >
          Load more episodes
        </button>
      </div>
    );
  }
}

export default PodcastEpisodes;
