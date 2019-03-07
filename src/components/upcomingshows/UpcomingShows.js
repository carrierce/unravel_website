import React from 'react';
import UpcomingShowItem from './UpcomingShowItem';
import CreateUpcomingShow from './CreateUpcomingShow';

class UpcomingShows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingshows: this.props.upcomingshows
    };
  }

  componentWillMount() {
    this.setState({
      upcomingshows: this.props.upcomingshows
    });
  }

  componentWillReceiveProps() {
    this.setState({
      upcomingshows: this.props.upcomingshows
    });
  }

  deleteUpcomingShow = index => {
    this.props.deleteupcomingshow(index);
  };

  render() {
    const renderedList = this.props.upcomingshows
      .slice(0)
      .reverse()
      .map((upcomingshow, index) => {
        return (
          <div key={index} className="ui segment">
            <UpcomingShowItem
              className="ui items"
              upcomingshow={upcomingshow}
              editupcomingshow={this.props.editupcomingshow}
              index={index}
              deleteupcomingshow={this.deleteUpcomingShow}
              getupcomingshowsfromdb={this.props.getupcomingshowsfromdb}
            />
          </div>
        );
      });
    return (
      <div>
        <CreateUpcomingShow postupcomingshow={this.props.postupcomingshow} />
        <div
          id="mobileUpcomingShowContainer"
          className="ui four column centered grid"
        >
          {renderedList}
        </div>
      </div>
    );
  }
}

export default UpcomingShows;
