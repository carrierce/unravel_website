import React from 'react';
import { Form, Text } from 'informed';

class CreateStorySubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      story: '',
      questionOrComment: ''
    };
    this.initialState = {
      name: '',
      email: '',
      story: '',
      questionOrComment: ''
    };
  }

  formChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.poststorysubmission(this.state);
    this.setState(this.initialState);
  };

  render() {
    const validate = value => {
      return !value || value.length < 5
        ? 'Field must be at least five characters'
        : undefined;
    };
    return (
      <div className="ui segment">
        <h2>Create Story Submission</h2>
        <Form className="ui form" onSubmit={() => this.submitForm()}>
          <div className="field">
            <label validate={this.validate}>Name</label>
            <input
              id="name"
              value={this.state.name}
              onChange={e => this.formChange(e)}
              placeholder="Past Show Photo Image Link"
              required
            />
          </div>
          <div className="field">
            <label>Email Address</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={e => this.formChange(e)}
              placeholder="Email Address"
              required
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
              required
            />
          </div>
          <div className="field">
            <label>Question Or Comment</label>
            <textarea
              rows="3"
              id="questionOrComment"
              value={this.state.questionOrComment}
              onChange={e => this.formChange(e)}
              placeholder="Question Or Comment"
              required
            />
          </div>
          <button
            className="positive ui button"
            onClick={e => this.submitForm(e)}
          >
            Submit Story Submission
          </button>
        </Form>
      </div>
    );
  }
}

export default CreateStorySubmission;
