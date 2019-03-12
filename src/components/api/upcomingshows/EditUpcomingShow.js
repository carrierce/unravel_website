import React from 'react';

class EditUpcomingShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggledforedit: props.toggledforedit,
      _id: props.upcomingshow._id,
      posterImageLink: props.upcomingshow.posterImageLink,
      showDateTime: props.upcomingshow.showDateTime,
      venue: props.upcomingshow.venue,
      showBlurb: props.upcomingshow.showBlurb,
      ticketUrl: props.upcomingshow.ticketUrl,
      showTitle: props.upcomingshow.showTitle
    };
  }

  componentWillReceiveProps() {
    this.setState({
      _id: this.props.upcomingshow._id,
      posterImageLink: this.props.upcomingshow.posterImageLink,
      showDateTime: this.props.upcomingshow.showDateTime,
      venue: this.props.upcomingshow.venue,
      showBlurb: this.props.upcomingshow.showBlurb,
      ticketUrl: this.props.upcomingshow.ticketUrl,
      showTitle: this.props.upcomingshow.showTitle
    });
  }

  formChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.editupcomingshow(this.state);
    this.props.toggleeditcomponent();
  };

  cancelEdit = () => {
    this.props.toggleeditcomponent();
  };

  render() {
    return (
      <div>
        <h1>Edit Upcoming Show</h1>
        <form className="ui form" onSubmit={() => this.submitForm()}>
          <div className="field">
            <label>Poster Image Link</label>
            <input
              id="posterImageLink"
              value={this.state.posterImageLink}
              onChange={e => this.formChange(e)}
              placeholder="Episode Title"
            />
          </div>
          <div className="field">
            <label>Show Date Time | Month/Day/Year, Hours:Minutes AM/PM</label>
            <input
              type="dateTime-local"
              id="showDateTime"
              value={this.state.showDateTime}
              onChange={e => this.formChange(e)}
            />
          </div>
          <div className="field">
            <label>Venue</label>
            <textarea
              rows="3"
              id="venue"
              value={this.state.venue}
              onChange={e => this.formChange(e)}
              placeholder="Show Notes"
            />
          </div>
          <div className="field">
            <label>Show Blurb</label>
            <textarea
              rows="3"
              id="showBlurb"
              value={this.state.showBlurb}
              onChange={e => this.formChange(e)}
              placeholder="Cover Image Link"
            />
          </div>
          <div className="field">
            <label>Ticket Url</label>
            <input
              id="ticketUrl"
              value={this.state.ticketUrl}
              onChange={e => this.formChange(e)}
              placeholder="Podcast Embed Link"
            />
          </div>
          <button
            className="positive ui button"
            onClick={e => this.submitForm(e)}
          >
            Submit Updated Upcoming Show
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

export default EditUpcomingShow;
