import React from 'react';
const unravelLogo = require('../../UnravelLogoWithText.png');

class Footer extends React.Component {
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
      <div id="footerBackground" className="ui three column grid">
        <div id="unravelLogoFooterRow" className="row">
          <img id="unravelLogoFooter" className="row" src={unravelLogo} />
        </div>
        <ul className="column">
          <li id="footer">Contact Us</li>
          <li id="footer">F.A.Q.</li>
        </ul>
        <ul className="column">
          <li id="footer">Facebook</li>
          <li id="footer">Instagram</li>
        </ul>
        <ul className="column">
          <li id="footer">WeChat</li>
        </ul>
        <ul>
          <li id="footerCopyright">All content ©2019 Unravel</li>
        </ul>
      </div>
    );
  }
}

export default Footer;
