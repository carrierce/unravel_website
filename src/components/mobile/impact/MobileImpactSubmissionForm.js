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

class MobileImpactSubmissionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      organization: '',
      message: '',
      formErrors: {
        name: '',
        email: '',
        organization: '',
        message: ''
      },
      submitError: false
    };
    this.initialState = {
      name: '',
      email: '',
      organization: '',
      message: '',
      formErrors: {
        name: '',
        email: '',
        organization: '',
        message: ''
      },
      submitError: false
    };
  }

  formChange = e => {
    e.preventDefault();
    const { id, value } = e.target;
    let formErrors = this.state.formErrors;
    switch (id) {
      case 'name':
        formErrors.name = formErrors.name =
          value.length < 1 ? 'Name cannot be blank' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value)
          ? ''
          : 'invalid email address';
        break;
      case 'organization':
        formErrors.organization =
          value.length < 1 ? 'Organization cannot be blank' : '';
        break;
      case 'message':
        formErrors.message = value.length < 1 ? 'Message cannot be blank' : '';
        break;
      default:
        break;
    }
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      this.props.postimpactform(this.state);
      this.setState(this.initialState);
    } else {
      this.setState({ submitError: true });
    }
  };

  render() {
    const { formErrors } = this.state;
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
              {formErrors.name.length > 0 && (
                <span id="errorMessage">{formErrors.name}</span>
              )}
            </div>
            <div className="field">
              <input
                type="email"
                id="email"
                value={this.state.email}
                onChange={e => this.formChange(e)}
                placeholder="Email..."
              />
              {formErrors.email.length > 0 && (
                <span id="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="field">
              <input
                id="organization"
                value={this.state.organization}
                onChange={e => this.formChange(e)}
                placeholder="Organization..."
              />
              {formErrors.organization.length > 0 && (
                <span id="errorMessage">{formErrors.organization}</span>
              )}
            </div>
            <div className="field">
              <textarea
                rows="7"
                id="message"
                value={this.state.message}
                onChange={e => this.formChange(e)}
                placeholder="Message..?"
              />
              {formErrors.message.length > 0 && (
                <span id="errorMessage">{formErrors.message}</span>
              )}
            </div>
            <div className="row">
              <button className="ui button" onClick={e => this.submitForm(e)}>
                Submit
              </button>
              <div />
            </div>
          </form>
          {this.state.submitError == true && (
            <div>
              <br />
              <span id="errorMessage">
                Form not submitted, please check that all fields are not empty
                and there are no error messages.
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MobileImpactSubmissionForm;
