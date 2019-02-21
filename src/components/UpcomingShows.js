import React from 'react';

class StorySubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posterImageLink: '',
      showDate: '',
      venue: '',
      showBlurb: '',
      ticketUrl: ''
    };
  }
  deleteUpcomingShow = index => {
    this.props.deleteupcomingshow(index);
  };

  formChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.postupcomingshow(this.state);
  };

  render() {
    const listToDisplay = this.props.upcomingshows.map((show, index) => {
      // the return acts like a .push so everytime I return something it is pushed into listToDisplay
      return (
        <li className="item" key={index}>
          <button onClick={() => this.deleteUpcomingShow(show._id)}>
            Delete Upcoming show
          </button>
          {show.posterImageLink}
        </li>
      );
    });
    return (
      <div>
        <h1>Hello from UpcomingShows!</h1>
        <form onSubmit={() => this.submitForm()}>
          <h5>
            Submit Upcoming Show Data (poster image url needs to be at least 5
            characters longs)
          </h5>
          <input
            id="posterImageLink"
            value={this.state.posterImageLink}
            onChange={e => this.formChange(e)}
            placeholder="poster image URL"
          />
          <input
            type="date"
            id="showDate"
            value={this.state.showDate}
            onChange={e => this.formChange(e)}
            placeholder="show date"
          />
          <input
            id="venue"
            value={this.state.venue}
            onChange={e => this.formChange(e)}
            placeholder="venue address"
          />
          <input
            id="showBlurb"
            value={this.state.showBlurb}
            onChange={e => this.formChange(e)}
            placeholder="show blurb"
          />
          <input
            id="ticketUrl"
            value={this.state.ticketUrl}
            onChange={e => this.formChange(e)}
            placeholder="ticket purchase URL"
          />
          <button onClick={e => this.submitForm(e)}>Submit</button>
        </form>
        <ul>{listToDisplay}</ul>
      </div>
    );
  }
}

export default StorySubmission;
