import React from 'react';
import PodcastItem from './PodcastItem';
import CreatePodcast from './CreatePodcast';

class Podcasts extends React.Component {
  deletePodcast = index => {
    this.props.deletepodcast(index);
  };

  render() {
    const renderedList = this.props.podcasts
      .slice(0)
      .reverse()
      .map((podcast, index) => {
        console.log(podcast);
        return (
          <div key={index} className="ui segment">
            <PodcastItem
              className="ui items"
              editpodcast={this.props.editpodcast}
              podcast={podcast}
              index={index}
              deletepodcast={this.deletePodcast}
            />
          </div>
        );
      });
    return (
      <div>
        <CreatePodcast postpodcast={this.props.postpodcast} />
        <div>{renderedList}</div>
      </div>
    );
  }
}

export default Podcasts;
