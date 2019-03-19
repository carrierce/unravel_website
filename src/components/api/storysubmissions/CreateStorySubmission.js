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
class CreateStorySubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      story: '',
      questionOrComment: '',
      formErrors: {
        name: '',
        email: '',
        story: '',
        questionOrComment: ''
      },
      submitError: false
    };
    this.initialState = {
      name: '',
      email: '',
      story: '',
      questionOrComment: '',
      formErrors: {
        name: '',
        email: '',
        story: '',
        questionOrComment: ''
      },
      submitError: false
    };
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
      default:
        break;
    }
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      this.props.poststorysubmission(this.state);
      this.setState(this.initialState);
    } else {
      this.setState({ submitError: true });
    }
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="ui segment">
        <h2>Create Story Submission</h2>
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
            <input
              id="email"
              value={this.state.email}
              onChange={e => this.formChange(e)}
              placeholder="Email Address"
            />
            {formErrors.email.length > 0 && (
              <span id="errorMessage">{formErrors.email}</span>
            )}
          </div>
          <div className="field">
            <label>Story</label>
            <textarea
              rows="5"
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
            <label>Question Or Comment</label>
            <textarea
              rows="5"
              id="questionOrComment"
              value={this.state.questionOrComment}
              onChange={e => this.formChange(e)}
              placeholder="Question Or Comment"
            />
          </div>
          <button
            className="positive ui button"
            onClick={e => this.submitForm(e)}
          >
            Submit Story Submission
          </button>
        </form>
        {this.state.submitError == true && (
          <div>
            <br />
            <span id="errorMessage">
              Story not submitted not posted, please check that all fields are
              not empty and there are no error messages.
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default CreateStorySubmission;
