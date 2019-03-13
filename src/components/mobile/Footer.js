import React from 'react';

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
        <div className="row">
          <img
            id="footerImage"
            className="row"
            src="https://via.placeholder.com/200x100"
          />
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
