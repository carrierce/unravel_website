import React from 'react';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === '' && (valid = false);
  });

  return valid;
};
class EditStorySubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggledforedit: props.toggledforedit,
      _id: props.storysubmission._id,
      name: props.storysubmission.name,
      email: props.storysubmission.email,
      story: props.storysubmission.story,
      questionOrComment: props.storysubmission.questionOrComment,
      formErrors: {
        name: '',
        email: '',
        story: '',
        questionOrComment: ''
      },
      submitError: false
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
    const { id, value } = e.target;
    let formErrors = this.state.formErrors;
    switch (id) {
      case 'name':
        formErrors.name = value.length < 1 ? 'Name cannot be blank' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value)
          ? ''
          : 'invalid email address';
        break;
      case 'story':
        formErrors.story = value.length < 1 ? 'Story cannot be blank' : '';
        break;
      default:
        break;
    }
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      this.props.editstorysubmission(this.state);
      this.props.toggleeditcomponent();
    } else {
      this.setState({ submitError: true });
    }
  };

  cancelEdit = () => {
    this.props.toggleeditcomponent();
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div>
        <h1>Edit Story Submission</h1>
        <form className="ui form" onSubmit={() => this.submitForm()}>
          <div className="field">
            <label>Name</label>
            <input
              id="name"
              value={this.state.name}
              onChange={e => this.formChange(e)}
              placeholder="Name"
            />
            {formErrors.name.length > 0 && (
              <span id="errorMessage">{formErrors.name}</span>
            )}
          </div>
          <div className="field">
            <label>Email Address</label>
            <textarea
              rows="2"
              id="email"
              value={this.state.email}
              onChange={e => this.formChange(e)}
              placeholder="Email"
            />
            {formErrors.email.length > 0 && (
              <span id="errorMessage">{formErrors.email}</span>
            )}
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
            {formErrors.story.length > 0 && (
              <span id="errorMessage">{formErrors.story}</span>
            )}
          </div>
          <div className="field">
            <label>Question or Comments</label>
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
        {this.state.submitError == true && (
          <div>
            <br />
            <span id="errorMessage">
              Story edit not posted, please check that all fields are not empty
              and there are no error messages.
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default EditStorySubmission;
