import React from 'react';
const moment = require('moment');
const cleanShowPoster = require('../../../cleanShowPoster.jpg');
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
              src={upcomingshow.posterImageLink}
              alt="woman smiling"
            />
            <h2 id="upcomingshows" className="row">
              {upcomingshow.showTitle} <br /> {showDate} • {showTime} <br />
              {upcomingshow.venue}
            </h2>
            <p id="upcomingshows" className="row">
              {upcomingshow.showBlurb}
            </p>
            <a id="upcomingshows" className="row" href={upcomingshow.ticketUrl}>
              <button
                className="row"
                className="ui button"
                id="upcomingshowticketbutton"
              >
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
        <div>{renderedList}</div>
      </div>
    );
  }
}

export default MobileHomePageUpcomingShows;
