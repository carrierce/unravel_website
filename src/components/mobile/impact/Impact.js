import React from 'react';
import MobileImpactSubmissionForm from './MobileImpactSubmissionForm';

class Impact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <MobileImpactSubmissionForm
          postimpactform={this.props.postimpactform}
        />
      </div>
    );
  }
}

export default Impact;
