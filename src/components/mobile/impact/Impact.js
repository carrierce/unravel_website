import React from 'react';
import MobileImpactSubmissionForm from './MobileImpactSubmissionForm';
import MobileImpactNavFooter from './MobileImpactNavFooter';
import MobileImpactTitle from './MobileImpactTitle';

class Impact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <MobileImpactTitle />
        <MobileImpactSubmissionForm
          postimpactform={this.props.postimpactform}
        />
        <MobileImpactNavFooter />
      </div>
    );
  }
}

export default Impact;
