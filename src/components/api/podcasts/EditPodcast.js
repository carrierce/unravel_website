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

class EditPodcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggledforedit: props.toggledforedit,
      _id: props.podcast._id,
      podcastCoverImageLink: props.podcast.podcastCoverImageLink,
      podcastName: props.podcast.podcastName,
      podcastBlurb: props.podcast.podcastBlurb,
      podcastShowNotes: props.podcast.podcastShowNotes,
      podcastEmbedLink: props.podcast.podcastEmbedLink,
      formErrors: {
        podcastCoverImageLink: '',
        podcastName: '',
        podcastBlurb: '',
        podcastShowNotes: '',
        podcastEmbedLink: ''
      },
      submitError: false
    };
  }

  componentWillReceiveProps() {
    this.setState({
      _id: this.props.podcast._id,
      podcastCoverImageLink: this.props.podcast.podcastCoverImageLink,
      podcastName: this.props.podcast.podcastName,
      podcastBlurb: this.props.podcast.podcastBlurb,
      podcastShowNotes: this.props.podcast.podcastShowNotes,
      podcastEmbedLink: this.props.podcast.podcastEmbedLink,
      formErrors: {
        podcastCoverImageLink: '',
        podcastName: '',
        podcastBlurb: '',
        podcastShowNotes: '',
        podcastEmbedLink: ''
      },
      submitError: false
    });
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
      this.props.editpodcast(this.state);
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
        <h1>Edit Podcast</h1>
        <form className="ui form" onSubmit={() => this.submitForm()}>
          <div className="field">
            <label>Episode Title</label>
            <input
              id="podcastName"
              value={this.state.podcastName}
              onChange={e => this.formChange(e)}
              placeholder="Episode Title"
            />
            {formErrors.podcastName.length > 0 && (
              <span id="errorMessage">{formErrors.podcastName}</span>
            )}
          </div>
          <div className="field">
            <label>Blurb</label>
            <textarea
              rows="2"
              id="podcastBlurb"
              value={this.state.podcastBlurb}
              onChange={e => this.formChange(e)}
              placeholder="Blurb"
            />
            {formErrors.podcastBlurb.length > 0 && (
              <span id="errorMessage">{formErrors.podcastBlurb}</span>
            )}
          </div>
          <div className="field">
            <label>Show Notes</label>
            <textarea
              rows="3"
              id="podcastShowNotes"
              value={this.state.podcastShowNotes}
              onChange={e => this.formChange(e)}
              placeholder="Show Notes"
            />
            {formErrors.podcastShowNotes.length > 0 && (
              <span id="errorMessage">{formErrors.podcastShowNotes}</span>
            )}
          </div>
          <div className="field">
            <label>
              Cover Image Link (Cover image link must be at least 5 characters
              long)
            </label>
            <input
              id="podcastCoverImageLink"
              value={this.state.podcastCoverImageLink}
              onChange={e => this.formChange(e)}
              placeholder="Cover Image Link"
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
            />
            {formErrors.podcastEmbedLink.length > 0 && (
              <span id="errorMessage">{formErrors.podcastEmbedLink}</span>
            )}
          </div>
          <button
            className="positive ui button"
            onClick={e => this.submitForm(e)}
          >
            Submit Updated Podcast
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
              Podcast not updated, please check that all fields are not empty
              and there are no error messages.
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default EditPodcast;
