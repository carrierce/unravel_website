import React from 'react';
import MobileHomePageTitle from './MobileHomePageTitle';
import MobileHomePageNavBar from './MobileHomePageNavBar';
import './MobileHomePage.css';

class MobileHomePageUpcomingShows extends React.Component {
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
    console.log(this.props.upcomingshows);
    return (
      <div id="upcomingShowsContainer" className="ui grid">
        <h1 id="upcomingShowsTitle" className="row">
          Upcoming Shows
        </h1>
      </div>
    );
  }
}

export default MobileHomePageUpcomingShows;
