import React from 'react';
import MobileHomePageTitle from './MobileHomePageTitle';
import MobileHomePageNavBar from './MobileHomePageNavBar';
import MobileHomePageUpcomingShows from './MobileHomePageUpcomingShows';
import MobileHomePagePastShows from './MobileHomePagePastShows';
import MobileHomePageNavFooter from './MobileHomePageNavFooter';
import MobileHomePageFooter from './MobileHomePageFooter';
import PopUpNav from '../popupnav';
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
    this.state = {
      visible: true
    };
  }

  closeSideBar = () => {
    this.setState({ visible: false });
  };

  openSideBar = () => {
    this.setState({ visible: true });
  };

  render() {
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            animation="overlay"
            id="popUpNavBar"
            visible={this.state.visible}
            width="wide"
            direction="right"
          >
            <PopUpNav closeSideBar={this.closeSideBar} />
          </Sidebar>
          <Sidebar.Pusher id="testSegement">
            <Segment basic>
              <MobileHomePageNavBar openSideBar={this.openSideBar} />
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
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default MobileHomePage;
