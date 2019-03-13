import React from 'react';

class MobileTellYourStorySubmissionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      story: '',
      questionOrComment: '',
      error: false,
      message: ''
    };
    this.initialState = {
      name: '',
      email: '',
      story: '',
      questionOrComment: ''
    };
  }

  formChange = e => {
    let val = e.target.id;
    console.log(this.state[val].length);

    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    if (this.state.name.length <= 0) {
      this.setState({ error: true, message: 'there is an error' });
      return;
    }
    this.props.poststorysubmission(this.state);
    this.setState(this.initialState);
  };

  render() {
    console.log(this.props);

    return (
      <div id="mobileTellYourStoryStorySubmission" className="ui centered grid">
        <h2 className="row">Submission Form</h2>
        <div className="fourteen wide column">
          <form className="ui form" onSubmit={() => this.submitForm()}>
            <div className="field">
              <input
                id="name"
                value={this.state.name}
                onChange={e => this.formChange(e)}
                placeholder="Name..."
              />
              <span>{this.state.name.message}</span>
            </div>
            <div className="field">
              <input
                name="email"
                type="email"
                id="email"
                value={this.state.email}
                onChange={e => this.formChange(e)}
                placeholder="Email..."
              />
            </div>
            <div className="field">
              <textarea
                rows="7"
                id="story"
                value={this.state.story}
                onChange={e => this.formChange(e)}
                placeholder="Story..."
              />
            </div>
            <div className="field">
              <textarea
                rows="7"
                id="questionOrComment"
                value={this.state.questionOrComment}
                onChange={e => this.formChange(e)}
                placeholder="Question Or Comment..?"
              />
            </div>
            <div className="row">
              <button className="ui button" onClick={e => this.submitForm(e)}>
                Submit
              </button>
              <div />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MobileTellYourStorySubmissionForm;
