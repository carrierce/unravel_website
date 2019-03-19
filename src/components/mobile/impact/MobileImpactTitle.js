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
          <h1>Unravel Impact</h1>
        </div>
        <div id="mobileImpactSubtitle" className="row">
          <h2>Bring the power of storytelling into your organization.</h2>
        </div>
        <img id="imageEmbedFullWidth" className="row" src={crowd} />
        <div id="mobileImpactBodyText" className="row">
          <p>
            Unravel Impact offers custom packages to organizations, companies,
            and schools looking to achieve goals, improve skills, facilitate
            team building or public speaking, boost morale, train storytellers,
            or more effectively engage with employees, peers, or audiences.
          </p>
        </div>
        <div id="posterEmbedCroppedWidthContainer" className="ui grid">
          <div>
            <img id="posterEmbedCroppedWidth" className="row" src={crowd} />
          </div>
          <div>
            <p>Program Includes:</p>
            <br />
            <ul>
              <li>Team Building Programs</li>
              <li>Storytelling Workshops</li>
              <li>Custom Liveshows</li>
              <li>Special Edition Liveshows</li>
            </ul>
            <p>
              Contact us below to learn more about how Unravel can help your
              organization achieve its goals.
            </p>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default MobileImpactTitle;
