import React from 'react';
import PodcastItem from './PodcastItem';

class Podcasts extends React.Component {
  deletePodcast = index => {
    this.props.deletepodcast(index);
  };

  render() {
    const renderedList = this.props.podcasts.map((podcast, index) => {
      return (
        <div index={index}>
          <button onClick={() => this.deletePodcast(podcast._id)}>
            Delete Podcast show
          </button>
          <PodcastItem
            editpodcast={this.props.editpodcast}
            podcast={podcast}
            index={index}
          />
        </div>
      );
    });
    return <div>{renderedList}</div>;
  }
}

export default Podcasts;
