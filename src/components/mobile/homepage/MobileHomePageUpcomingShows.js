import React from 'react';
import './MobileHomePage.css';
const moment = require('moment');
const cleanShowPoster = require('/Users/charlescarrier/Dev/unravel_website/src/images/cleanShowPoster.jpg');
class MobileHomePageUpcomingShows extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderedList = this.props.upcomingshows
      .slice(0)
      .reverse()
      .map((upcomingshow, index) => {
        const showDate = moment(upcomingshow.showDateTime).format(
          'MMMM D, YYYY'
        );
        const showTime = moment(upcomingshow.showDateTime).format('hh:mm a');
        return (
          <div className="ui grid" key={index}>
            <img
              id="posterEmbedCroppedWidth"
              className="row"
              src={cleanShowPoster}
            />
            <h2 id="upcomingshows" className="row">
              {upcomingshow.showTitle} <br /> {showDate} • {showTime} <br />
              {upcomingshow.venue}
            </h2>
            <p id="upcomingshows" className="row">
              {upcomingshow.showBlurb}
            </p>
            <a id="upcomingshows" className="row" href={upcomingshow.ticketUrl}>
              <button className="ui button" id="upcomingshowticketbutton">
                Tickets
              </button>
            </a>
          </div>
        );
      });
    return (
      <div id="upcomingShowsContainer" className="ui grid">
        <h1 id="upcomingShowsTitle" className="row">
          Upcoming Show
        </h1>
        {renderedList}
      </div>
    );
  }
}

export default MobileHomePageUpcomingShows;
