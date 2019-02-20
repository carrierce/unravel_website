import React from 'react';

class StorySubmission extends React.Component {
  deleteUpcomingShow = index => {
    this.props.deleteupcomingshow(index);
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
        <ul>{listToDisplay}</ul>
      </div>
    );
  }
}

export default StorySubmission;
