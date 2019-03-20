import React from 'react';
import PodcastTitle from './PodcastTitle';
import PodcastEpisodes from './PodcastEpisodes';
import PodcastNavFooter from './PodcastNavFooter';

class Podcast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PodcastTitle />
        <PodcastEpisodes podcasts={this.props.podcasts} />
        <PodcastNavFooter />
      </div>
    );
  }
}

export default Podcast;
