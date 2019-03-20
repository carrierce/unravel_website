import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PopUpNav from './PopUpNav';
import NavBar from './NavBar';
import Footer from './Footer';
import Impact from './impact/Impact';
import MobileHomePage from './homepage/MobileHomePage';
import MobileTellYourStory from './tellyourstory/MobileTellYourStory';
import Podcast from './podcast/Podcast';
import { Icon, Menu, Sidebar, Segment } from 'semantic-ui-react';

class Mobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  openSideBar = () => {
    this.setState({ visible: true });
  };

  closeSideBar = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div>
        <Sidebar.Pushable className="ui segment">
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
              <NavBar openSideBar={this.openSideBar} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <div>
                      <MobileHomePage
                        pastshows={this.props.pastshows}
                        upcomingshows={this.props.upcomingshows}
                      />
                    </div>
                  )}
                />
                <Route
                  path="/mobile/impact"
                  render={() => (
                    <div>
                      <Impact postimpactform={this.props.postimpactform} />
                    </div>
                  )}
                />
                <Route
                  path="/mobile/tellyourstory"
                  render={() => (
                    <div>
                      <MobileTellYourStory
                        poststorysubmission={this.props.poststorysubmission}
                      />
                    </div>
                  )}
                />
                <Route
                  path="/mobile/podcast"
                  render={() => (
                    <div>
                      <Podcast podcasts={this.props.podcasts} />
                    </div>
                  )}
                />
                <Route
                  render={() => (
                    <div>
                      <MobileHomePage
                        pastshows={this.props.pastshows}
                        upcomingshows={this.props.upcomingshows}
                      />
                    </div>
                  )}
                />
              </Switch>
              <Footer />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Mobile;
