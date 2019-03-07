import React from 'react';
class CreateImpactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      organization: '',
      message: ''
    };
    this.initialState = {
      name: '',
      email: '',
      organization: '',
      message: ''
    };
  }

  formChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.postimpactform(this.state);
    this.setState(this.initialState);
  };

  render() {
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
          <div className="field">
            <label>Email</label>
            <textarea
              rows="2"
              id="email"
              value={this.state.email}
              onChange={e => this.formChange(e)}
              placeholder="Email"
              required
            />
          </div>
          <div className="field">
            <label>Organization</label>
            <textarea
              rows="3"
              id="organization"
              value={this.state.organization}
              onChange={e => this.formChange(e)}
              placeholder="Organization"
              required
            />
          </div>
          <div className="field">
            <label>Message</label>
            <textarea
              rows="3"
              id="message"
              value={this.state.message}
              onChange={e => this.formChange(e)}
              placeholder="Message"
              required
            />
          </div>
          <button
            className="positive ui button"
            onClick={e => this.submitForm(e)}
          >
            Submit Past Show
          </button>
        </form>
      </div>
    );
  }
}

export default CreateImpactForm;
