import React from 'react';
import MobileHomePageTitle from './MobileHomePageTitle';
import MobileHomePageNavBar from './MobileHomePageNavBar';
import './MobileHomePage.css';

class MobileHomePage extends React.Component {
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
      <div>
        <MobileHomePageNavBar />
        <MobileHomePageTitle />
      </div>
    );
  }
}

export default MobileHomePage;
