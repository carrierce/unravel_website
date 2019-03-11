import React from 'react';
import { Icon, Menu, Sidebar, Segment, SidebarPusher } from 'semantic-ui-react';

class MobileHomePageNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {
    return (
      <div>
        <div id="mobileHomePageNavBar" className="ui grid">
          <button onClick={this.handleShowClick}>Toggle</button>
          <div
            id="leftFloatedColumn"
            className="left floated right aligned four wide column"
          >
            <div id="basicSegment" className="ui basic compact segment">
              <i class="large bullseye icon" />
            </div>
          </div>
          <div
            id="rightFloatedColumn"
            className="right floated left aligned four wide column"
          >
            <div id="basicSegment" className="ui basic compact segment">
              <i className="large bars icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileHomePageNavBar;
