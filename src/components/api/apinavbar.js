import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';

class ApiNavBar extends Component {
  state = { open: false };

  render() {
    return (
      <Menu size="massive" borderless inverted>
        <Menu.Item header>Unravel Content Management</Menu.Item>
        <Dropdown
          item
          className="right floated column"
          id="apiDropDownMenu"
          text="Sections"
          position="right"
        >
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/api/podcasts">Podcasts</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/api/upcomingshows">Upcoming Shows</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/api/pastshows">Past Shows</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/api/storysubmissions">Story Submission</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/api/impact">Impact</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    );
  }
}

export default ApiNavBar;
