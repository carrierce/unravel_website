import React from 'react';
const crowd = require('../../../crowd.jpg');
let filteredList = [];
let renderedList = [];
class PodcastEpisodes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: -1,
      filteredList: [],
      renderedList: []
    };
  }

  showMoreEpisodes = () => {
    this.setState({ i: this.state.i - 1 });
    console.log(this.state.i);
  };

  render() {
    filteredList = this.props.podcasts.slice(this.state.i);
    renderedList = filteredList.reverse().map((podcast, index) => {
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
