import React from 'react';

class MobileHomePageNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      story: '',
      questionOrComment: '',
      error: false,
      message: ''
    };
  }

  render() {
    return (
      <div id="mobileHomePageNavBar" className="ui grid">
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
    );
  }
}

export default MobileHomePageNavBar;