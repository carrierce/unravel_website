import React from 'react';
import EditUpcomingShow from './EditUpcomingShow';
import ConfirmDeleteUpcomingShow from '../modals/ConfirmDeleteUpcomingShow';

class UpcomingShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
      isToggleForEditUpcomingShow: false
    };
  }
  handleClick = () => {
    this.props.getupcomingshowsfromdb();
    this.setState({
      isToggle: !this.state.isToggle,
      isToggleForEditUpcomingShow: !this.state.isToggleForEditUpcomingShow
    });
  };
  render() {
    return (
      <div key={this.props.index}>
        <h2>{this.props.upcomingshow.showDate}</h2>
        <div
          style={{ display: this.state.isToggle ? 'none' : 'block' }}
          className="ui relaxed divided list"
        >
          <div className="item">
            <div className="header">Poster Image Link</div>
            <div className="description">
              {this.props.upcomingshow.posterImageLink}
            </div>
          </div>
          <div className="item">
            <div className="header">Show Date</div>
            <div className="description">
              {this.props.upcomingshow.showDate}
            </div>
          </div>
          <div className="item">
            <div className="header">Venue</div>
            <div className="description">{this.props.upcomingshow.venue}</div>
          </div>
          <div className="item">
            <div className="header">Show Blurb</div>
            <div className="description">
              {this.props.upcomingshow.showBlurb}
            </div>
          </div>
          <div className="item">
            <div className="header">Ticket URL</div>
            <div className="description">
              {this.props.upcomingshow.ticketUrl}
            </div>
          </div>
        </div>
        <br />
        <div
          style={{ display: this.state.isToggle ? 'none' : 'block' }}
          className="ui horizontal list"
        >
          <div className="item">
            <button className="positive ui button" onClick={this.handleClick}>
              Edit Upcoming Show
            </button>
          </div>
          <div className="item">
            <ConfirmDeleteUpcomingShow
              deleteupcomingshow={this.props.deleteupcomingshow}
              upcomingshow={this.props.upcomingshow}
            />
          </div>
        </div>
        <div style={{ display: this.state.isToggle ? 'block' : 'none' }}>
          <EditUpcomingShow
            toggledforedit={this.state.isToggleForEditUpcomingShow}
            toggleeditcomponent={this.handleClick}
            deleteupcomingshow={this.props.deleteupcomingshow}
            editupcomingshow={this.props.editupcomingshow}
            upcomingshow={this.props.upcomingshow}
          />
        </div>
      </div>
    );
  }
}

export default UpcomingShowItem;
