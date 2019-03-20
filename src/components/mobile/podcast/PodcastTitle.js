import React from 'react';

class PodcastTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mobileHomePageContainer" className="ui grid">
        <div id="mobileHomePageTitle" className="row">
          <h1>
            Unravel: <br /> The Podcast
          </h1>
        </div>
        <img
          id="podcastCover"
          className="row"
          src="https://via.placeholder.com/150"
        />
        <div id="mobileTellYourStoryBodyText" className="row">
          <p>
            Podcast description Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas nec risus blandit, consequat nisi et,
            tempus arcu. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae;
          </p>
        </div>
        <a id="mobileTellYourStoryBodyText" className="row">
          <button
            className="row"
            className="ui button"
            id="podcastSubscribeButton"
          >
            Subscribe
          </button>
        </a>
      </div>
    );
  }
}

export default PodcastTitle;
