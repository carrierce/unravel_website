import React from 'react';
const moment = require('moment');

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

const validWebsiteRegex = RegExp(
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
);

class CreateUpcomingShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posterImageLink: '',
      showDateTime: '',
      venue: '',
      showBlurb: '',
      ticketUrl: '',
      showTitle: '',
      formErrors: {
        posterImageLink: '',
        showDateTime: '',
        venue: '',
        showBlurb: '',
        ticketUrl: '',
        showTitle: ''
      }
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
    e.preventDefault();

    // this.setState({ [e.target.id]: e.target.value });
    // I think i need to move the setState to a different function
    // which runs after the formChange
    // console.log(e.target.value.length);
    const { id, value } = e.target;
    let formErrors = this.state.formErrors;
    console.log(e.target.value);
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
    this.setState({ formErrors, [e.target.id]: e.target.value }, () =>
      console.log(this.state)
    );
  };

  submitForm = e => {
    e.preventDefault();
    this.props.postupcomingshow(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="ui segment">
        <h2>Create Upcoming Show</h2>
        <form className="ui form" onSubmit={() => this.submitForm()}>
          <div className="field">
            <label>Poster Image Link</label>
            <input
              id="posterImageLink"
              value={this.state.posterImageLink}
              onChange={this.formChange}
              placeholder="Poster Image Link"
              required
              type="text"
            />
            {formErrors.posterImageLink.length > 0 && (
              <span id="errorMessage">{formErrors.posterImageLink}</span>
            )}
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
            {formErrors.showDateTime.length > 0 && (
              <span id="errorMessage">{formErrors.showDateTime}</span>
            )}
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
          {formErrors.showTitle.length > 0 && (
            <span id="errorMessage">{formErrors.showTitle}</span>
          )}
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
          {formErrors.venue.length > 0 && (
            <span id="errorMessage">{formErrors.venue}</span>
          )}
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
          {formErrors.showBlurb.length > 0 && (
            <span id="errorMessage">{formErrors.showBlurb}</span>
          )}
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
