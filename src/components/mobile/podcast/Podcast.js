import React from 'react';
import PodcastTitle from './PodcastTitle';

class Podcast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PodcastTitle />
      </div>
    );
  }
}

export default Podcast;
