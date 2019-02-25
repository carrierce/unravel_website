import React from 'react';

class EditShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: props.showinfo._id,
      posterImageLink: props.showinfo.posterImageLink,
      showDate: props.showinfo.showDate,
      venue: props.showinfo.venue,
      showBlurb: props.showinfo.showBlurb,
      ticketUrl: props.showinfo.ticketUrl
    };
  }

  formChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.editupcomingshow(this.state);
  };

  render() {
    return (
      <div>
        <h1>Hello from Edit Upcoming Show</h1>
        <form onSubmit={() => this.submitForm()}>
          <h5>
            Edit Upcoming Show Data (poster image url needs to be at least 5
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
        <h5>Hello from Edit Show</h5>
        <h1>{this.props.showinfo.venue}</h1>
      </div>
    );
  }
}

export default EditShow;
