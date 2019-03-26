import React from 'react';
const unravelLogo = require('../../UnravelLogo.png');

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  openSideBar = () => {
    this.props.openSideBar();
  };

  render() {
    return (
      <div>
        <div id="mobileHomePageNavBar" className="ui grid">
          <div
            id="leftFloatedColumn"
            className="left floated right aligned four wide column"
          >
            <div id="basicSegment" className="ui basic compact segment">
              <div>
                <img id="unravelLogoHeader" src={unravelLogo} />
              </div>
            </div>
          </div>
          <div
            id="rightFloatedColumn"
            className="right floated left aligned four wide column"
          >
            <div id="basicSegment" className="ui basic compact segment">
              <button onClick={this.openSideBar}>
                <i className="large bars icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
