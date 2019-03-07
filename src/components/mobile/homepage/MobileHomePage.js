import React from 'react';
import MobileHomePageTitle from './MobileHomePageTitle';
import MobileHomePageNavBar from './MobileHomePageNavBar';
import MobileHomePageUpcomingShows from './MobileHomePageUpcomingShows';
import './MobileHomePage.css';

class MobileHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingshows: this.props.upcomingshows
    };
  }

  render() {
    return (
      <div>
        <MobileHomePageNavBar />
        <MobileHomePageTitle />
        <MobileHomePageUpcomingShows
          id="mobileUpcomingShowContainer"
          upcomingshows={this.props.upcomingshows}
        />
      </div>
    );
  }
}

export default MobileHomePage;
