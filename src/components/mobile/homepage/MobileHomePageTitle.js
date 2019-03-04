import React from 'react';

class MobileHomePageTitle extends React.Component {
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
    return (
      <div id="mobileHomePageContainer" className="ui grid">
        <div id="mobileHomePage" className="row">
          Harnessing the power of stories for impact and connection
        </div>
        <a
          className="row"
          id="mobileHomePageTicket"
          className="row"
          href="https://www.247tickets.com/t/unravel-waves"
        >
          Get Tickets To Our Next Show
        </a>
        <img
          id="imageEmbed"
          className="row"
          src="https://via.placeholder.com/1000x200"
        />
        <div id="bodyText" class="row">
          Our mission is to facilitate the awareness of and engagement with our
          shared humanity. Stories are the most fundamental reminder that there
          is so much more that connects us than divides us.
        </div>

        <img className="row" src="https://via.placeholder.com/400x200" />
      </div>
    );
  }
}

export default MobileHomePageTitle;
