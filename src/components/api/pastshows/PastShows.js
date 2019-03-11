import React from 'react';
import PastShowItem from './PastShowItem';
import CreatePastShow from './CreatePastShow';

class PastShows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pastshows: this.props.pastshows
    };
  }

  componentWillMount() {
    this.setState({
      pastshows: this.props.pastshows
    });
  }

  componentWillReceiveProps() {
    this.setState({
      pastshows: this.props.pastshows
    });
  }

  deletePastshow = index => {
    this.props.deletepastshow(index);
  };

  render() {
    const renderedList = this.props.pastshows
      .slice(0)
      .reverse()
      .map((pastshow, index) => {
        return (
          <div key={index} className="ui segment">
            <PastShowItem
              className="ui items"
              editpastshow={this.props.editpastshow}
              pastshow={pastshow}
              index={index}
              deletepastshow={this.deletePastshow}
              getpastshowsfromdb={this.props.getpastshowsfromdb}
            />
          </div>
        );
      });
    return (
      <div>
        <CreatePastShow postpastshow={this.props.postpastshow} />
        <div>{renderedList}</div>
      </div>
    );
  }
}

export default PastShows;
