import React from 'react';
import MobileHomePageTitle from './MobileHomePageTitle';
import NavBar from '../NavBar';
import MobileHomePageUpcomingShows from './MobileHomePageUpcomingShows';
import MobileHomePagePastShows from './MobileHomePagePastShows';
import MobileHomePageNavFooter from './MobileHomePageNavFooter';
import MobileHomePageFooter from './MobileHomePageFooter';
import PopUpNav from '../PopUpNav';
import {
  Icon,
  Menu,
  Sidebar,
  Segment,
  SidebarPusher,
  SidebarPushable
} from 'semantic-ui-react';

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
        <MobileHomePageFooter />
      </div>
    );
  }
}

export default MobileHomePage;
