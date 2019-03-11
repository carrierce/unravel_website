import React from 'react';

class EditStorySubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggledforedit: props.toggledforedit,
      _id: props.storysubmission._id,
      name: props.storysubmission.name,
      email: props.storysubmission.email,
      story: props.storysubmission.story,
      questionOrComment: props.storysubmission.questionOrComment
    };
  }

  componentWillReceiveProps() {
    this.setState({
      _id: this.props.storysubmission._id,
      name: this.props.storysubmission.name,
      email: this.props.storysubmission.email,
      story: this.props.storysubmission.story,
      questionOrComment: this.props.storysubmission.questionOrComment
    });
  }

  formChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.editstorysubmission(this.state);
    this.props.toggleeditcomponent();
  };

  cancelEdit = () => {
    this.props.toggleeditcomponent();
  };

  render() {
    return (
      <div>
        <h1>Edit Podcast</h1>
        <form className="ui form" onSubmit={() => this.submitForm()}>
          <div className="field">
            <label>Name</label>
            <input
              id="name"
              value={this.state.name}
              onChange={e => this.formChange(e)}
              placeholder="Name"
            />
          </div>
          <div className="field">
            <label>Email</label>
            <textarea
              rows="2"
              id="email"
              value={this.state.email}
              onChange={e => this.formChange(e)}
              placeholder="Email"
            />
          </div>
          <div className="field">
            <label>Story</label>
            <textarea
              rows="3"
              id="story"
              value={this.state.story}
              onChange={e => this.formChange(e)}
              placeholder="Story"
            />
          </div>
          <div className="field">
            <label>
              Cover Image Link (Cover image link must be at least 5 characters
              long)
            </label>
            <input
              id="questionOrComment"
              value={this.state.questionOrComment}
              onChange={e => this.formChange(e)}
              placeholder="Question or Comments"
            />
          </div>
          <button
            className="positive ui button"
            onClick={e => this.submitForm(e)}
          >
            Submit Updated Story
          </button>
          <button
            className="ui primary button"
            onClick={e => this.cancelEdit()}
          >
            Discard Edits
          </button>
        </form>
      </div>
    );
  }
}

export default EditStorySubmission;
