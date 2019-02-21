import React from 'react';
import EditPodcast from './EditPodcast';

const PodcastItem = props => {
  return (
    <div key={props.index}>
      <EditPodcast editpodcast={props.editpodcast} podcast={props.podcast} />
      <br />
      <hr />
      <h4>PODCAST</h4>
      <h5>{props.podcast._id}</h5>
      <h5>{props.podcast.podcastCoverImageLink}</h5>
      <h5>{props.podcast.podcastName}</h5>
      <h5>{props.podcast.podcastBlurb}</h5>
      <h5>{props.podcast.podcastShowNotes}</h5>
      <h5>{props.podcast.podcastEmbedLink}</h5>
      <br />
    </div>
  );
};

export default PodcastItem;
