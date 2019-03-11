import React from 'react';

class MobileHomePageFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  handleShowClick = () => {
    this.setState({ visible: !this.state.visible });
    console.log(this.state.visible);
  };

  render() {
    return (
      <div id="mobileHomePageFooterBackground" className="ui three column grid">
        <div className="row">
          <img
            id="mobileHomePageFooterImage"
            className="row"
            src="https://via.placeholder.com/200x100"
          />
        </div>
        <ul className="column">
          <li id="mobileHomePageFooter">Contact Us</li>
          <li id="mobileHomePageFooter">F.A.Q.</li>
        </ul>
        <ul className="column">
          <li id="mobileHomePageFooter">Facebook</li>
          <li id="mobileHomePageFooter">Instagram</li>
        </ul>
        <ul className="column">
          <li id="mobileHomePageFooter">WeChat</li>
        </ul>
        <ul>
          <li id="mobileHomePageFooterCopyright">All content ©2019 Unravel</li>
        </ul>
      </div>
    );
  }
}

export default MobileHomePageFooter;
