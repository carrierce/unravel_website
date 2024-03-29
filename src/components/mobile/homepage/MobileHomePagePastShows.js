import React from 'react';
const moment = require('moment');
const crowd = require('../../../crowd.jpg');

class MobilePagePastShows extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderedList = this.props.pastshows
      .slice(-3)
      .reverse()
      .map((pastshow, index) => {
        const showDate = moment(pastshow.showDate).format('MMMM D, YYYY');
        return (
          <div className="ui grid" key={index}>
            <div>
              <img id="posterEmbedCroppedWidth" className="row" src={crowd} />
            </div>
            <h2 id="upcomingshows" className="row">
              {pastshow.showTitle} @ {pastshow.venue} <br /> {showDate}
            </h2>
          </div>
        );
      });
    return (
      <div id="upcomingShowsContainer" className="ui grid">
        <h1 id="upcomingShowsTitle" className="row">
          Past Show
        </h1>
        {renderedList}
      </div>
    );
  }
}

export default MobilePagePastShows;
