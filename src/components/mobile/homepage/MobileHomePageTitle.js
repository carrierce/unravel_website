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
        <div id="mobileHomePageTitle" className="row">
          Harnessing the power of stories for impact and connection
        </div>
        <a
          className="row"
          id="mobileHomePageTicket"
          href="https://www.247tickets.com/t/unravel-waves"
        >
          Get Tickets To Our Next Show
        </a>
        <img
          id="imageEmbed"
          className="row"
          src={require('/Users/charlescarrier/Dev/unravel_website/src/components/mobile/homepage/J7A0965.jpg')}
        />
        <div id="bodyText" class="row">
          Our mission is to facilitate the awareness of and engagement with our
          shared humanity. Stories are the most fundamental reminder that there
          is so much more that connects us than divides us.
        </div>

        <img
          id="imageEmbed"
          className="row"
          src="https://via.placeholder.com/200x100"
        />
      </div>
    );
  }
}

export default MobileHomePageTitle;
