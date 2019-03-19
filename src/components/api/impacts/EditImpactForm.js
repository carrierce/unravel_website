import React from 'react';

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

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
class EditImpactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggledforedit: props.toggledforedit,
      _id: props.impactform._id,
      name: props.impactform.name,
      email: props.impactform.email,
      organization: props.impactform.organization,
      message: props.impactform.message,
      formErrors: {
        name: '',
        email: '',
        organization: '',
        message: ''
      },
      submitError: false
    };
  }

  componentWillReceiveProps() {
    this.setState({
      _id: this.props.impactform._id,
      name: this.props.impactform.name,
      email: this.props.impactform.email,
      organization: this.props.impactform.organization,
      message: this.props.impactform.message
    });
  }

  formChange = e => {
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
      this.props.editimpactform(this.state);
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
        <h1>Edit Impact Form</h1>
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
          {formErrors.name.length > 0 && (
            <span id="errorMessage">{formErrors.name}</span>
          )}
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
            <label>Organization</label>
            <input
              id="organization"
              value={this.state.organization}
              onChange={e => this.formChange(e)}
              placeholder="Organization"
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
              Impact form not posted, please check that all fields are not empty
              and there are no error messages.
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default EditImpactForm;
