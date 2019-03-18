import React from 'react';
import EditStorySubmission from './EditStorySubmission';
import ConfirmDeleteStorySubmission from '../modals/ConfirmDeleteStorySubmission';

class StorySubmissionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
      isToggleForEditStorySubmission: false
    };
  }
  handleClick = () => {
    this.props.getstorysubmissionsfromdb();
    this.setState({
      isToggle: !this.state.isToggle,
      isToggleForEditStorySubmission: !this.state.isToggleForEditStorySubmission
    });
  };
  render() {
    return (
      <div key={this.props.index}>
        <h2>{this.props.storysubmission.name}</h2>
        <div
          style={{ display: this.state.isToggle ? 'none' : 'block' }}
          className="ui relaxed divided list"
        >
          <div className="item">
            <div className="header">Name</div>
            <div className="description">{this.props.storysubmission.name}</div>
          </div>
          <div className="item">
            <div className="header">Email Address</div>
            <div className="email">{this.props.storysubmission.email}</div>
          </div>
          <div className="item">
            <div className="header">Story</div>
            <div className="description">
              {this.props.storysubmission.story}
            </div>
          </div>
          <div className="item">
            <div className="header">Question Or Comment</div>
            <div className="description">
              {this.props.storysubmission.questionOrComment}
            </div>
          </div>
        </div>
        <br />
        <div
          style={{ display: this.state.isToggle ? 'none' : 'block' }}
          className="ui horizontal list"
        >
          <div className="item">
            <button className="positive ui button" onClick={this.handleClick}>
              Edit Story Submission Show
            </button>
          </div>
          <div className="item">
            <ConfirmDeleteStorySubmission
              deletestorysubmission={this.props.deletestorysubmission}
              storysubmission={this.props.storysubmission}
            />
          </div>
        </div>
        <div style={{ display: this.state.isToggle ? 'block' : 'none' }}>
          <EditStorySubmission
            toggledforedit={this.state.isToggleForEditStorySubmission}
            toggleeditcomponent={this.handleClick}
            deletestorysubmission={this.props.deletestorysubmission}
            editstorysubmission={this.props.editstorysubmission}
            storysubmission={this.props.storysubmission}
            getstorysubmissionsfromdb={this.props.getstorysubmissionsfromdb}
          />
        </div>
      </div>
    );
  }
}

export default StorySubmissionItem;
