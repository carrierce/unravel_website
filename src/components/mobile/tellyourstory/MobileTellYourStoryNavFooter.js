import React from 'react';
import { Link } from 'react-router-dom';

class MobileTellYourStoryNavFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mobileTellYourStoryNavFooter" className="ui grid">
        <ul>
          <li>
            <Link id="mobileTellYourStoryNavFooterLink" to="/mobile/impact">
              Work with us
            </Link>
          </li>
          <li>
            <Link id="mobileTellYourStoryNavFooterLink" to="/">
              Come to a live show
            </Link>
          </li>
          <li>
            <Link id="mobileTellYourStoryNavFooterLink" to="/mobile/podcast">
              Listen to the podcast
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default MobileTellYourStoryNavFooter;
