import React from 'react';

class CreateUpcomingShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posterImageLink: '',
      showDateTime: '',
      venue: '',
      showBlurb: '',
      ticketUrl: '',
      showTitle: ''
    };
    this.initialState = {
      posterImageLink: '',
      showDateTime: '',
      venue: '',
      showBlurb: '',
      ticketUrl: '',
      showTitle: ''
    };
  }
  formChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.postupcomingshow(this.state);
    this.setState(this.initialState);
  };

  render() {
    return (
      <div className="ui segment">
        <h2>Create Upcoming Show</h2>
        <form className="ui form" onSubmit={() => this.submitForm()}>
          <div className="field">
            <label>Poster Image Link</label>
            <input
              id="posterImageLink"
              value={this.state.posterImageLink}
              onChange={e => this.formChange(e)}
              placeholder="Poster Image Link"
              required
            />
          </div>
          <div className="field">
            <label>
              Show Date & Time | Month/Day/Year, Hours:Minutes AM/PM
            </label>
            <input
              type="datetime-local"
              rows="2"
              id="showDateTime"
              value={this.state.showDateTime}
              onChange={e => this.formChange(e)}
              placeholder="Show Date"
              required
            />
          </div>
          <div className="field">
            <label>Show Title</label>
            <input
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
              rows="3"
              id="venue"
              value={this.state.venue}
              onChange={e => this.formChange(e)}
              placeholder="Venue"
              required
            />
          </div>
          <div className="field">
            <label>Show Blurb</label>
            <input
              id="showBlurb"
              value={this.state.showBlurb}
              onChange={e => this.formChange(e)}
              placeholder="Blurb"
              required
            />
          </div>
          <div className="field">
            <label>Ticket Url</label>
            <input
              id="ticketUrl"
              value={this.state.ticketUrl}
              onChange={e => this.formChange(e)}
              placeholder="Ticket Url"
              required
            />
          </div>
          <button
            className="positive ui button"
            onClick={e => this.submitForm(e)}
          >
            Submit New Show
          </button>
        </form>
      </div>
    );
  }
}

export default CreateUpcomingShow;
