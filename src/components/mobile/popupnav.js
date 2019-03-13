import React from 'react';
import { Link } from 'react-router-dom';

class PopUpNav extends React.Component {
  render() {
    return (
      <div id="popUpNavBar" className="ui grid">
        <div className="four column row">
          <div className="left floated column">
            <img
              id="mobileHomePageFooterImage"
              src="https://via.placeholder.com/50x50"
            />
          </div>
          <div className="right floated column">
            <button onClick={this.props.closeSideBar}>
              <i className="huge x icon" />
            </button>
          </div>
        </div>
        <div id="popUpLinks" className="ui grid">
          <div className="row">
            <h3 onClick={this.props.closeSideBar}>
              <Link to="/mobile/home">Unravel Live</Link>
            </h3>
          </div>
          <div id="popUpIndented" className="row">
            <h3>
              <a href="https://www.247tickets.com/t/unravel-waves">Tickets</a>
            </h3>
          </div>
          <div id="popUpIndented" className="row">
            <h3 onClick={this.props.closeSideBar}>
              <Link to="/mobile/tellyourstory">Submit your story</Link>
            </h3>
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
    );
  }
}
export default PopUpNav;
