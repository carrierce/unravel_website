import React from 'react';
import { Link } from 'react-router-dom';

class PodcastNavFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="podcastPageNavFooter" className="ui grid">
        <ul>
          <li id="podcastPageNavFooter">
            <Link id="podcastPageNavFooter" to="/mobile/impact">
              Work with us
            </Link>
          </li>
          <li>
            <Link id="mobileTellYourStoryNavFooterLink" to="/">
              Come to a live show
            </Link>
          </li>
          <li id="podcastPageNavFooter">
            <Link id="podcastPageNavFooter" to="/mobile/tellyourstory">
              Submit your story
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default PodcastNavFooter;
