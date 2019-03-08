import React from 'react';
const moment = require('moment');
class EditPastShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggledforedit: props.toggledforedit,
      _id: props.pastshow._id,
      photoImageLink: props.pastshow.photoImageLink,
      showDate: props.pastshow.showDate,
      venue: props.pastshow.venue,
      showTitle: props.pastshow.showTitle
    };
  }

  componentWillReceiveProps() {
    this.setState({
      _id: this.props.pastshow._id,
      photoImageLink: this.props.pastshow.photoImageLink,
      showDate: this.props.pastshow.showDate,
      venue: this.props.pastshow.venue,
      showTitle: this.props.pastshow.showTitle
    });
  }

  formChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.editpastshow(this.state);
    this.props.toggleeditcomponent();
  };

  cancelEdit = () => {
    this.props.toggleeditcomponent();
  };

  render() {
    return (
      <div>
        <h1>Edit Past Show</h1>
        <form className="ui form" onSubmit={() => this.submitForm()}>
          <div className="field">
            <label>Photo Image Link</label>
            <input
              id="photoImageLink"
              value={this.state.photoImageLink}
              onChange={e => this.formChange(e)}
              placeholder="Photo Image Link"
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
            />
          </div>
          <div className="field">
            <label>Venue</label>
            <textarea
              rows="3"
              id="venue"
              value={this.state.venue}
              onChange={e => this.formChange(e)}
              placeholder="Venue"
            />
          </div>
          <div className="field">
            <label>Show Title</label>
            <textarea
              rows="3"
              id="showTitle"
              value={this.state.showTitle}
              onChange={e => this.formChange(e)}
              placeholder="Show Title"
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

export default EditPastShow;
