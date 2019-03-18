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
      },
      submitError: false
    };
    this.initialState = {
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
      },
      submitError: false
    };
  }
  formChange = e => {
    e.preventDefault();

    const { id, value } = e.target;
    let formErrors = this.state.formErrors;
    switch (id) {
      case 'posterImageLink':
        formErrors.posterImageLink = validWebsiteRegex.test(value)
          ? ''
          : 'invalid web address';
        break;
      case 'ticketUrl':
        formErrors.ticketUrl = validWebsiteRegex.test(value)
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
    if (formValid(this.state)) {
      this.props.postupcomingshow(this.state);
      this.setState(this.initialState);
    } else {
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
      this.setState({ submitError: true });
    }
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="ui segment">
        <h2>Create Upcoming Show</h2>
        <form className="ui form" onSubmit={() => this.submitForm()}>
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
            <label>Ticket Url</label>
            <input
              id="ticketUrl"
              value={this.state.ticketUrl}
              onChange={e => this.formChange(e)}
              placeholder="Ticket Url"
              required
            />
          </div>
          {formErrors.ticketUrl.length > 0 && (
            <span id="errorMessage">{formErrors.ticketUrl}</span>
          )}
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
          <button
            className="positive ui button"
            onClick={e => this.submitForm(e)}
          >
            Submit New Show
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

export default CreateUpcomingShow;
