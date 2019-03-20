import React from 'react';
import { DocumentProvider } from 'mongoose';
const moment = require('moment');
const crowd = require('../../../crowd.jpg');

class PodcastEpisodes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.podcasts);
    const renderedList = this.props.podcasts
      .slice(-3)
      .reverse()
      .map((podcast, index) => {
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
        >
          Load more episodes
        </button>
      </div>
    );
  }
}

export default PodcastEpisodes;
