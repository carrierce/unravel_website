import React from 'react';
import StorySubmissionItem from './StorySubmissionItem';
import CreateStorySubmission from './CreateStorySubmission';

class StorySubmissions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storysubmissions: this.props.storysubmissions
    };
  }

  componentWillMount() {
    this.setState({
      storysubmissions: this.props.storysubmissions
    });
  }

  componentWillReceiveProps() {
    this.setState({
      storysubmissions: this.props.storysubmissions
    });
  }

  deleteStorySubmission = index => {
    this.props.deletestorysubmission(index);
  };

  render() {
    const renderedList = this.props.storysubmissions
      .slice(0)
      .reverse()
      .map((storysubmission, index) => {
        return (
          <div key={index} className="ui segment">
            <StorySubmissionItem
              className="ui items"
              editstorysubmission={this.props.editstorysubmission}
              storysubmission={storysubmission}
              index={index}
              deletestorysubmission={this.deleteStorySubmission}
              getstorysubmissionsfromdb={this.props.getstorysubmissionsfromdb}
            />
          </div>
        );
      });
    return (
      <div>
        <CreateStorySubmission
          poststorysubmission={this.props.poststorysubmission}
        />
        <div>{renderedList}</div>
      </div>
    );
  }
}

export default StorySubmissions;
