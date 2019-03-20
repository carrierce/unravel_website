import React from 'react';
import PodcastTitle from './PodcastTitle';
import PodcastEpisodes from './PodcastEpisodes';

class Podcast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PodcastTitle />
        <PodcastEpisodes podcasts={this.props.podcasts} />
      </div>
    );
  }
}

export default Podcast;
