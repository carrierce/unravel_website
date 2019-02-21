import React from 'react';
import UpcomingShowItem from './UpcomingShowItem';

class UpcomingShows extends React.Component {
  deleteUpcomingShow = index => {
    this.props.deleteupcomingshow(index);
  };

  render() {
    const renderedList = this.props.upcomingshows.map((upcomingshow, index) => {
      return (
        <div index={index}>
          <button onClick={() => this.deleteUpcomingShow(upcomingshow._id)}>
            Delete Upcoming show
          </button>
          <UpcomingShowItem
            editupcomingshow={this.props.editupcomingshow}
            upcomingshow={upcomingshow}
            index={index}
          />
        </div>
      );
    });
    return (
      <div>
        {/* <button onClick={() => this.props.editupcomingshow()}>
          Edit Upcoming show
        </button> */}
        {renderedList}
      </div>
    );
  }
}

export default UpcomingShows;
