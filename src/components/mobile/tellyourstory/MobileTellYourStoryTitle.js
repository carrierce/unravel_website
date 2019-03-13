import React from 'react';

const crowd = require('/Users/charlescarrier/Dev/unravel_website/src/images/crowd.jpg');
const woman = require('/Users/charlescarrier/Dev/unravel_website/src/images/woman.jpg');
const unravelLiveIntroductionCrowd = require('/Users/charlescarrier/Dev/unravel_website/src/images/unravelLiveIntroductionCrowd.jpg');
class MobileTellYourStoryTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mobileHomePageContainer" className="ui grid">
        <div id="mobileHomePageTitle" className="row">
          Tell Your Story
        </div>
        <div id="mobileTellYourStoryBodyText" className="row">
          <p>
            About the story Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Maecenas nec risus blandit, consequat nisi et, tempus arcu.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Ut euismod orci sed metus vehicula, eget
            mattis velit pharetra.
          </p>
        </div>
        <img id="imageEmbedFullWidth" className="row" src={crowd} />
      </div>
    );
  }
}

export default MobileTellYourStoryTitle;
