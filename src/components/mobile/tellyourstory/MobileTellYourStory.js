import React from 'react';
import MobileTellYourStoryTitle from './MobileTellYourStoryTitle';
import MobileTellYourStorySubmissionForm from './MobileTellYourStorySubmissionForm';
import MobileTellYourStoryNavFooter from './MobileTellYourStoryNavFooter';
class MobileTellYourStory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MobileTellYourStoryTitle />
        <MobileTellYourStorySubmissionForm
          poststorysubmission={this.props.poststorysubmission}
        />
        <MobileTellYourStoryNavFooter />
      </div>
    );
  }
}

export default MobileTellYourStory;
