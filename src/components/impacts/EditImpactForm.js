import React from 'react';

class EditImpactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggledforedit: props.toggledforedit,
      _id: props.impactform._id,
      name: props.impactform.name,
      email: props.impactform.email,
      organization: props.impactform.organization,
      message: props.impactform.message
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
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.editimpactform(this.state);
    this.props.toggleeditcomponent();
  };

  cancelEdit = () => {
    this.props.toggleeditcomponent();
  };

  render() {
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
          <div className="field">
            <label>Email Address</label>
            <textarea
              rows="2"
              id="email"
              value={this.state.email}
              onChange={e => this.formChange(e)}
              placeholder="Email Address"
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
            />
          </div>
          <button
            className="positive ui button"
            onClick={e => this.submitForm(e)}
          >
            Submit Updated Show
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

export default EditImpactForm;
