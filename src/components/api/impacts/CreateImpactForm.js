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
class CreateImpactForm extends React.Component {
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
      <div className="ui segment">
        <h2>Create Impact Form</h2>
        <form className="ui form" onSubmit={() => this.submitForm()}>
          <div className="field">
            <label>Name</label>
            <input
              id="name"
              value={this.state.name}
              onChange={e => this.formChange(e)}
              placeholder="Name"
              required
            />
          </div>
          {formErrors.name.length > 0 && (
            <span id="errorMessage">{formErrors.name}</span>
          )}
          <div className="field">
            <label>Email</label>
            <input
              id="email"
              value={this.state.email}
              onChange={e => this.formChange(e)}
              placeholder="Email"
              required
            />
            {formErrors.email.length > 0 && (
              <span id="errorMessage">{formErrors.email}</span>
            )}
          </div>
          <div className="field">
            <label>Organization</label>
            <input
              id="organization"
              value={this.state.organization}
              onChange={e => this.formChange(e)}
              placeholder="Organization"
              required
            />
            {formErrors.organization.length > 0 && (
              <span id="errorMessage">{formErrors.organization}</span>
            )}
          </div>
          <div className="field">
            <label>Message</label>
            <textarea
              rows="5"
              id="message"
              value={this.state.message}
              onChange={e => this.formChange(e)}
              placeholder="Message"
              required
            />
            {formErrors.message.length > 0 && (
              <span id="errorMessage">{formErrors.message}</span>
            )}
          </div>
          <button
            className="positive ui button"
            onClick={e => this.submitForm(e)}
          >
            Submit Impact Form
          </button>
        </form>
        {this.state.submitError == true && (
          <div>
            <br />
            <span id="errorMessage">
              Upcoming show not posted, please check that all fields are not
              empty and there are no error messages.
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default CreateImpactForm;
