import React from 'react';
const moment = require('moment');

const validWebsiteRegex = RegExp(
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
);

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
class EditPastShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggledforedit: props.toggledforedit,
      _id: props.pastshow._id,
      photoImageLink: props.pastshow.photoImageLink,
      showDate: props.pastshow.showDate,
      venue: props.pastshow.venue,
      showTitle: props.pastshow.showTitle,
      formErrors: {
        photoImageLink: '',
        showDate: '',
        venue: '',
        showTitle: ''
      },
      submitError: false
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
    const { id, value } = e.target;
    let formErrors = this.state.formErrors;
    switch (id) {
      case 'photoImageLink':
        formErrors.photoImageLink = validWebsiteRegex.test(value)
          ? ''
          : 'invalid web address';
        break;
      case 'venue':
        formErrors.venue = value.length < 1 ? 'Venue cannot be blank' : '';
        break;
      case 'showTitle':
        formErrors.showTitle =
          value.length < 1 ? 'Show Title cannot be blank' : '';
        break;
      default:
        break;
    }
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      this.props.editpastshow(this.state);
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
        <h1>Edit Past Show</h1>
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
            <label>Venue</label>
            <input
              id="venue"
              value={this.state.venue}
              onChange={e => this.formChange(e)}
              placeholder="Venue"
            />
          </div>
          {formErrors.venue.length > 0 && (
            <span id="errorMessage">{formErrors.venue}</span>
          )}
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
            <label>Photo Image Link</label>
            <input
              id="photoImageLink"
              value={this.state.photoImageLink}
              onChange={e => this.formChange(e)}
              placeholder="Photo Image Link"
            />
            {formErrors.photoImageLink.length > 0 && (
              <span id="errorMessage">{formErrors.photoImageLink}</span>
            )}
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

export default EditPastShow;
