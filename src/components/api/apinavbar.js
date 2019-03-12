import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class ApiNavBar extends Component {
  state = { open: false };

  render() {
    return (
      <div className="ui inverted menu">
        <div className="middle aligned left menu">
          <h2 className="item">Unravel CMS</h2>
        </div>
        <ul className="right menu">
          <li className="item">
            <Link to="/api/podcasts">Podcasts</Link>
          </li>
          <li className="item">
            <Link to="/api/upcomingshows">Upcoming Shows</Link>
          </li>
          <li className="item">
            <Link to="/api/pastshows">Past Shows</Link>
          </li>
          <li className="item">
            <Link to="/api/storysubmissions">Story Submission</Link>
          </li>
          <li className="item">
            <Link to="/api/impact">Impact</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default ApiNavBar;
