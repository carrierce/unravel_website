import React from 'react';
import './MobileHomePage.css';
const moment = require('moment');
class MobileHomePageUpcomingShows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      story: '',
      questionOrComment: '',
      error: false,
      message: ''
    };
  }

  render() {
    console.log(this.props.upcomingshows);
    const renderedList = this.props.upcomingshows
      .slice(0)
      .reverse()
      .map((upcomingshow, index) => {
        const showDate = moment(upcomingshow.showDateTime).format(
          'MMMM, D, YYYY'
        );
        const showTime = moment(upcomingshow.showDateTime).format('hh:mm a');
        return (
          <div className="centered row" key={index}>
            {/* <div id="mobileUpcomingShowPosterContainer" className="row"> */}
            <img
              className="row"
              id="mobileUpcomingShowPoster"
              src="https://via.placeholder.com/300"
            />
            {/* </div> */}
            <div id="mobileUpcomingShowMajorContent" className="row">
              {upcomingshow.showTitle}
            </div>
            <div id="mobileUpcomingShowMajorContent" className="row">
              {showDate} @ {showTime}
            </div>
            <div id="mobileUpcomingShowMajorContent" className="row">
              {upcomingshow.venue}
            </div>
            <div id="mobileUpcomingShow" className="row">
              {upcomingshow.showBlurb}
            </div>
            <div id="mobileUpcomingShow" className="row">
              <a
                className="row"
                id="mobileHomePageTicket"
                href={upcomingshow.ticketUrl}
              >
                Tickets
              </a>
            </div>
          </div>
        );
      });
    return (
      <div id="upcomingShowsContainer" className="ui grid">
        <h1 id="upcomingShowsTitle" className="row">
          Upcoming Shows
        </h1>
        <div className="row">{renderedList}</div>
      </div>
    );
  }
}

export default MobileHomePageUpcomingShows;
