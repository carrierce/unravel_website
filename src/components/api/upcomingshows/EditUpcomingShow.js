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

const validWebsiteRegex = RegExp(
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
);
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
      showTitle: props.upcomingshow.showTitle,
      formErrors: {
        posterImageLink: '',
        showDateTime: '',
        venue: '',
        showBlurb: '',
        ticketUrl: '',
        showTitle: ''
      },
      submitError: false
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
    const { id, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (id) {
      case 'posterImageLink':
        formErrors.posterImageLink = validWebsiteRegex.test(value)
          ? ''
          : 'invalid web address';
        break;
      case 'showTitle':
        formErrors.showTitle = value.length < 1 ? 'Venue cannot be blank' : '';
        break;
      case 'venue':
        formErrors.venue = value.length < 1 ? 'Venue cannot be blank' : '';
        break;
      case 'showBlurb':
        formErrors.showBlurb =
          value.length < 1 ? 'Show Blurb cannot be blank' : '';
        break;
      default:
        break;
    }
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      this.props.editupcomingshow(this.state);
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
        <h2>Edit Upcoming Show</h2>
        <form className="ui form" onSubmit={() => this.submitForm()}>
          <div className="field">
            <label>Show Title</label>
            <input
              id="showTitle"
              value={this.state.showTitle}
              onChange={e => this.formChange(e)}
              placeholder="Show Title"
            />
          </div>
          {formErrors.showTitle.length > 0 && (
            <span id="errorMessage">{formErrors.showTitle}</span>
          )}
          <div className="field">
            <label>Show Blurb</label>
            <textarea
              rows="5"
              id="showBlurb"
              value={this.state.showBlurb}
              onChange={e => this.formChange(e)}
              placeholder="Cover Image Link"
            />
          </div>
          {formErrors.showBlurb.length > 0 && (
            <span id="errorMessage">{formErrors.showBlurb}</span>
          )}
          <div className="field">
            <label>Venue</label>
            <input
              id="venue"
              value={this.state.venue}
              onChange={e => this.formChange(e)}
              placeholder="Show Notes"
            />
          </div>
          {formErrors.venue.length > 0 && (
            <span id="errorMessage">{formErrors.venue}</span>
          )}
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
            <label>Ticket Url</label>
            <input
              id="ticketUrl"
              value={this.state.ticketUrl}
              onChange={e => this.formChange(e)}
              placeholder="Podcast Embed Link"
            />
            {formErrors.ticketUrl.length > 0 && (
              <span id="errorMessage">{formErrors.ticketUrl}</span>
            )}
          </div>
          <div className="field">
            <label>Poster Image Link</label>
            <input
              id="posterImageLink"
              value={this.state.posterImageLink}
              onChange={e => this.formChange(e)}
              placeholder="Episode Title"
            />
          </div>
          {formErrors.posterImageLink.length > 0 && (
            <span id="errorMessage">{formErrors.posterImageLink}</span>
          )}
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

export default EditUpcomingShow;
