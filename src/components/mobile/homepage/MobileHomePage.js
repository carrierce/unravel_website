import React from 'react';
import MobileHomePageTitle from './MobileHomePageTitle';
import MobileHomePageNavBar from './MobileHomePageNavBar';
import MobileHomePageUpcomingShows from './MobileHomePageUpcomingShows';
import MobileHomePagePastShows from './MobileHomePagePastShows';
import './MobileHomePage.css';

class MobileHomePage extends React.Component {
  constructor(props) {
    super(props);
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
        <MobileHomePagePastShows
          id="mobilePastShowContainer"
          pastshows={this.props.pastshows}
        />
      </div>
    );
  }
}

export default MobileHomePage;
