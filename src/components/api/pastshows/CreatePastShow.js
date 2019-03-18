import React from 'react';
class CreatePastShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoImageLink: '',
      showDate: '',
      venue: '',
      showTitle: ''
    };
    this.initialState = {
      photoImageLink: '',
      showDate: '',
      venue: '',
      showTitle: ''
    };
  }

  formChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.postpastshow(this.state);
    this.setState(this.initialState);
  };

  render() {
    return (
      <div className="ui segment">
        <h2>Create Past Show</h2>
        <form className="ui form" onSubmit={() => this.submitForm()}>
          <div className="field">
            <label>Show Title</label>
            <textarea
              rows="1"
              id="showTitle"
              value={this.state.showTitle}
              onChange={e => this.formChange(e)}
              placeholder="Show Title"
              required
            />
          </div>
          <div className="field">
            <label>Venue</label>
            <textarea
              rows="1"
              id="venue"
              value={this.state.venue}
              onChange={e => this.formChange(e)}
              placeholder="Venue"
              required
            />
          </div>
          <div className="field">
            <label>Show Date</label>
            <input
              type="date"
              id="showDate"
              value={this.state.showDate}
              onChange={e => this.formChange(e)}
              placeholder="Show Date"
              required
            />
          </div>
          <div className="field">
            <label>Photo Image Link</label>
            <input
              id="photoImageLink"
              value={this.state.photoImageLink}
              onChange={e => this.formChange(e)}
              placeholder="Past Show Photo Image Link"
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

export default CreatePastShow;
