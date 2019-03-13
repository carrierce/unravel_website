import React from 'react';
import MobileHomePageTitle from './MobileHomePageTitle';
import MobileHomePageUpcomingShows from './MobileHomePageUpcomingShows';
import MobileHomePagePastShows from './MobileHomePagePastShows';
import MobileHomePageNavFooter from './MobileHomePageNavFooter';

class MobileHomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MobileHomePageTitle />
        <MobileHomePageUpcomingShows
          id="mobileUpcomingShowContainer"
          upcomingshows={this.props.upcomingshows}
        />
        <MobileHomePagePastShows
          id="mobilePastShowContainer"
          pastshows={this.props.pastshows}
        />
        <MobileHomePageNavFooter />
      </div>
    );
  }
}

export default MobileHomePage;
