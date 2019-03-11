import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class MobileHomePageNavFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mobileHomePageNavFooter" className="ui grid">
        <ul>
          <li id="mobileHomePageNavFooter">
            <Link id="mobileHomePageNavFooterLink" to="/mobile/homepage">
              Submit your story
            </Link>
          </li>
          <li id="mobileHomePageNavFooter">
            <Link id="mobileHomePageNavFooterLink" to="/">
              Listen to the podcast
            </Link>
          </li>
          <li id="mobileHomePageNavFooter">
            <Link id="mobileHomePageNavFooterLink" to="/upcomingshows">
              Work with us
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default MobileHomePageNavFooter;
