import React from 'react';

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
class CreatePodcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      podcastCoverImageLink: '',
      podcastName: '',
      podcastBlurb: '',
      podcastShowNotes: '',
      podcastEmbedLink: '',
      formErrors: {
        podcastCoverImageLink: '',
        podcastName: '',
        podcastBlurb: '',
        podcastShowNotes: '',
        podcastEmbedLink: ''
      },
      submitError: false
    };
    this.initialState = {
      podcastCoverImageLink: '',
      podcastName: '',
      podcastBlurb: '',
      podcastShowNotes: '',
      podcastEmbedLink: '',
      formErrors: {
        podcastCoverImageLink: '',
        podcastName: '',
        podcastBlurb: '',
        podcastShowNotes: '',
        podcastEmbedLink: ''
      }
    };
  }

  formChange = e => {
    const { id, value } = e.target;
    let formErrors = this.state.formErrors;
    switch (id) {
      case 'podcastCoverImageLink':
        formErrors.podcastCoverImageLink = validWebsiteRegex.test(value)
          ? ''
          : 'invalid web address';
        break;
      case 'podcastName':
        formErrors.podcastName =
          value.length < 1 ? 'Podcast title cannot be blank' : '';
        break;
      case 'podcastBlurb':
        formErrors.podcastBlurb =
          value.length < 1 ? 'Podcast blurb cannot be blank' : '';
        break;
      case 'podcastShowNotes':
        formErrors.podcastShowNotes =
          value.length < 1 ? 'Podcast show notes cannot be blank' : '';
        break;
      case 'podcastEmbedLink':
        formErrors.podcastEmbedLink = validWebsiteRegex.test(value)
          ? ''
          : 'invalid web address';
        break;
      default:
        break;
    }
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      this.props.postpodcast(this.state);
      this.setState(this.initialState);
    } else {
      this.setState({ submitError: true });
    }
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="ui segment">
        <h2>Create Podcast</h2>
        <form className="ui form" onSubmit={() => this.submitForm()}>
          <div className="field">
            <label>Episode Title</label>
            <input
              id="podcastName"
              value={this.state.podcastName}
              onChange={e => this.formChange(e)}
              placeholder="Episode Title"
              required
            />
            {formErrors.podcastName.length > 0 && (
              <span id="errorMessage">{formErrors.podcastName}</span>
            )}
          </div>
          <div className="field">
            <label>Blurb</label>
            <textarea
              rows="5"
              id="podcastBlurb"
              value={this.state.podcastBlurb}
              onChange={e => this.formChange(e)}
              placeholder="Blurb"
              required
            />
            {formErrors.podcastBlurb.length > 0 && (
              <span id="errorMessage">{formErrors.podcastBlurb}</span>
            )}
          </div>
          <div className="field">
            <label>Show Notes</label>
            <textarea
              rows="5"
              id="podcastShowNotes"
              value={this.state.podcastShowNotes}
              onChange={e => this.formChange(e)}
              placeholder="Show Notes"
              required
            />
            {formErrors.podcastShowNotes.length > 0 && (
              <span id="errorMessage">{formErrors.podcastShowNotes}</span>
            )}
          </div>
          <div className="field">
            <label>
              Cover Image Link (Cover Image Link must be at least 5 characters
              long)
            </label>
            <input
              id="podcastCoverImageLink"
              value={this.state.podcastCoverImageLink}
              onChange={e => this.formChange(e)}
              placeholder="Cover Image Link"
              required
            />
            {formErrors.podcastCoverImageLink.length > 0 && (
              <span id="errorMessage">{formErrors.podcastCoverImageLink}</span>
            )}
          </div>
          <div className="field">
            <label>Podcast Embed Link</label>
            <input
              id="podcastEmbedLink"
              value={this.state.podcastEmbedLink}
              onChange={e => this.formChange(e)}
              placeholder="Podcast Embed Link"
              required
            />
            {formErrors.podcastEmbedLink.length > 0 && (
              <span id="errorMessage">{formErrors.podcastEmbedLink}</span>
            )}
          </div>
          <button
            className="positive ui button"
            onClick={e => this.submitForm(e)}
          >
            Submit New Podcast
          </button>
        </form>
        {this.state.submitError == true && (
          <div>
            <br />
            <span id="errorMessage">
              Podcast not posted, please check that all fields are not empty and
              there are no error messages.
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default CreatePodcast;
