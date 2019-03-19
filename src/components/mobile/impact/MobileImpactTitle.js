import React from 'react';

const crowd = require('../../../crowd.jpg');
const woman = require('../../../woman.jpg');
const unravelLiveIntroductionCrowd = require('../../../unravelLiveIntroductionCrowd.jpg');
class MobileImpactTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mobileHomePageContainer" className="ui grid">
        <div id="mobileHomePageTitle" className="row">
          <h1>Work With Us</h1>
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
        <div id="mobileTellYourStoryBodyText" className="row">
          <h1>Story GuideLines</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec risus blandit, consequat nisi et, tempus arcu. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae;
          </p>
          <p>
            - Guideline #1: consequat nisi et, tempus arcu. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae.
          </p>
          <p>
            - Guideline #2: consequat nisi et, tempus arcu. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae.
          </p>
        </div>
      </div>
    );
  }
}

export default MobileImpactTitle;
