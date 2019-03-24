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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      formErrors: {
        userName: '',
        password: ''
      },
      submitError: false
    };
    this.initialState = {
      userName: '',
      password: '',
      formErrors: {
        userName: '',
        password: ''
      },
      submitError: false
    };
  }

  formChange = e => {
    const { id, value } = e.target;
    let formErrors = this.state.formErrors;
    switch (id) {
      case 'userName':
        formErrors.userName =
          value.length < 1 ? 'User Name cannot be blank' : '';
        break;
      case 'venue':
        formErrors.password = value.length < 1 ? 'Venue cannot be blank' : '';
        break;
      default:
        break;
    }
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      this.props.postLoginData(this.state);
      this.setState(this.initialState);
    } else {
      this.setState({ submitError: true });
    }
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="ui segment">
        <h2>Login</h2>
        <form className="ui form" onSubmit={() => this.submitForm()}>
          <div className="field">
            <label>Login</label>
            <input
              id="userName"
              value={this.state.userName}
              onChange={e => this.formChange(e)}
              placeholder="Show Title"
              required
            />
            {formErrors.userName.length > 0 && (
              <span id="errorMessage">{formErrors.userName}</span>
            )}
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={e => this.formChange(e)}
              placeholder="Venue"
              required
            />
            {formErrors.password.length > 0 && (
              <span id="errorMessage">{formErrors.password}</span>
            )}
          </div>
          <button
            className="positive ui button"
            onClick={e => this.submitForm(e)}
          >
            Login
          </button>
        </form>
        {this.state.submitError == true && (
          <div>
            <br />
            <span id="errorMessage">
              Past show not posted, please check that all fields are not empty
              and there are no error messages.
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
