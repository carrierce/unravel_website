import React from 'react';

const crowd = require('../../../crowd.jpg');
const woman = require('../../../woman.jpg');
const unravelLiveIntroductionCrowd = require('../../../unravelLiveIntroductionCrowd.jpg');
class MobileHomePageTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mobileHomePageContainer" className="ui grid">
        <div id="mobileHomePageTitle" className="row">
          Harnessing the power of stories for impact and connection
        </div>
        <div id="mobileHomePageTicket" className="row">
          <a
            id="mobileHomePageTicket"
            href="https://www.247tickets.com/t/unravel-waves"
          >
            Get Tickets To Our Next Show
          </a>
        </div>
        <img id="imageEmbedFullWidth" className="row" src={crowd} />
        <div id="testimonial" className="row">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec risus blandit, consequat nisi et, tempus arcu. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Ut euismod orci sed metus vehicula, eget mattis velit
            pharetra." - Person{' '}
          </p>
        </div>
        <img id="imageEmbedFullWidth" className="row" src={woman} />
        <div id="bodyText" className="row">
          <p>
            Our mission is to facilitate the awareness of and engagement with
            our shared humanity. Stories are the most fundamental reminder that
            there is so much more that connects us than divides us.
          </p>
        </div>
        <h1 className="row" id="unravelLiveIntroduction">
          Unravel Live
        </h1>
        <img
          id="imageEmbedCroppedWidth"
          className="row"
          src={unravelLiveIntroductionCrowd}
        />
        {/* </div> */}
        <div className="row" id="unravelLiveIntroduction">
          <p>
            Unravel is a storytelling platform, premised on a monthly live show.
            At each show, a group of storytellers recount authentic stories from
            their own lives loosely inspired by a given theme. Each live show is
            a unique combination of venue, theme, and storyteller lineup
          </p>
        </div>
      </div>
    );
  }
}

export default MobileHomePageTitle;
