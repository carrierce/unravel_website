import React from 'react';
import MobileHomePageTitle from './MobileHomePageTitle';
import MobileHomePageNavBar from './MobileHomePageNavBar';
import MobileHomePageUpcomingShows from './MobileHomePageUpcomingShows';
import MobileHomePagePastShows from './MobileHomePagePastShows';
import MobileHomePageNavFooter from './MobileHomePageNavFooter';
import MobileHomePageFooter from './MobileHomePageFooter';
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
            <div id="popUpNavBar" className="ui grid">
              <div className="four column row">
                <div className="left floated column">
                  <img
                    id="mobileHomePageFooterImage"
                    src="https://via.placeholder.com/50x50"
                  />
                </div>
                <div className="right floated column">
                  <button onClick={this.closeSideBar}>
                    <i className="huge x icon" />
                  </button>
                </div>
              </div>
              <div id="popUpLinks" className="ui grid">
                <div className="row">
                  <h3>Unravel Live</h3>
                </div>
                <div id="popUpIndented" className="row">
                  <h3>Tickets</h3>
                </div>
                <div id="popUpIndented" className="row">
                  <h3>Submit your story</h3>
                </div>
                <div className="row">
                  <h3>Unravel Impact</h3>
                </div>
                <div className="row">
                  <h3>Unravel: The Podcast</h3>
                  <br />
                  <br />
                </div>

                <div className="row">
                  <h3>Facebook</h3>
                </div>
                <div className="row">
                  <h3>Instagram</h3>
                </div>
                <div className="row">
                  <h3>Wechat</h3>
                </div>
              </div>
            </div>
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
