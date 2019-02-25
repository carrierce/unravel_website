import React from 'react';
import EditPodcast from './EditPodcast';

const PodcastItem = props => {
  return (
    <div key={props.index}>
      <div className="ui item">
        <h2>Podcast Data</h2>
        <p>Cover Image Link: {props.podcast.podcastCoverImageLink}</p>
        <p>Name: {props.podcast.podcastName}</p>
        <p>Blurb: {props.podcast.podcastBlurb}</p>
        <p>Show Notes: {props.podcast.podcastShowNotes}</p>
        <p>Embed Link: {props.podcast.podcastEmbedLink}</p>
      </div>
      <br />
      <button className="positive ui button">Edit Podcast</button>
      <button
        className="negative ui button"
        onClick={() => this.props.deletepodcast(this.state._id)}
      >
        Delete Podcast
      </button>
      <div className="ui divider" />
      <EditPodcast
        deletepodcast={props.deletepodcast}
        editpodcast={props.editpodcast}
        podcast={props.podcast}
      />
    </div>
  );
};

export default PodcastItem;
