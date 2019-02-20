import React from 'react';

class StorySubmission extends React.Component {
  render() {
    const listToDisplay = this.props.storysubmission.map((story, index) => {
      // the return acts like a .push so everytime I return something it is pushed into listToDisplay
      return (
        <li className="item" key={index}>
          <button>Delete Story Submission</button>
          {story.name}
        </li>
      );
    });

    return (
      <div>
        <h4>Hello from StorySubmission!</h4>
        <ul className="ui relaxed divided list">{listToDisplay}</ul>
      </div>
    );
  }
}

export default StorySubmission;
