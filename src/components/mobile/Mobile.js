import React from 'react';
import { Route } from 'react-router-dom';
import PopUpNav from './PopUpNav';
import NavBar from './NavBar';
import Footer from './Footer';
import MobileHomePage from './homepage/MobileHomePage';
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
              <NavBar openSideBar={this.openSideBar} />
              <Route
                path="/mobile/home"
                render={() => (
                  <div>
                    <MobileHomePage
                      pastshows={this.props.pastshows}
                      upcomingshows={this.props.upcomingshows}
                    />
                  </div>
                )}
              />
              <Footer />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Mobile;
