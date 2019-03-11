import React from 'react';
import EditPastShow from './EditPastShow';
import ConfirmDeletePastShow from '../modals/ConfirmDeletePastShow';
const moment = require('moment');

class PastShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
      isToggleForEditPastShow: false
    };
  }

  handleClick = () => {
    console.log('handleclick is called!!');
    this.props.getpastshowsfromdb();
    this.setState({
      isToggle: !this.state.isToggle,
      isToggleForEditPastShow: !this.state.isToggleForEditPastShow
    });
  };

  render() {
    return (
      <div key={this.props.index}>
        <h2>{this.props.pastshow.showTitle}</h2>
        <div
          style={{ display: this.state.isToggle ? 'none' : 'block' }}
          className="ui relaxed divided list"
        >
          <div className="item">
            <div className="header">Photo Image Link</div>
            <div className="description">
              {this.props.pastshow.photoImageLink}
            </div>
          </div>
          <div className="item">
            <div className="header">Show Date</div>
            <div className="description">
              {moment(this.props.pastshow.showDate).format(
                'dddd, MMMM Do YYYY'
              )}
            </div>
          </div>
          <div className="item">
            <div className="header">Venue</div>
            <div className="description">{this.props.pastshow.venue}</div>
          </div>
          <div className="item">
            <div className="header">Show Title</div>
            <div className="description">{this.props.pastshow.showTitle}</div>
          </div>
        </div>
        <br />
        <div
          style={{ display: this.state.isToggle ? 'none' : 'block' }}
          className="ui horizontal list"
        >
          <div className="item">
            <button className="positive ui button" onClick={this.handleClick}>
              Edit Past Show
            </button>
          </div>
          <div className="item">
            <ConfirmDeletePastShow
              deletepastshow={this.props.deletepastshow}
              pastshow={this.props.pastshow}
            />
          </div>
        </div>
        <div style={{ display: this.state.isToggle ? 'block' : 'none' }}>
          <EditPastShow
            toggledforedit={this.state.isToggleForEditPastShow}
            toggleeditcomponent={this.handleClick}
            deletepastshow={this.props.deletepastshow}
            editpastshow={this.props.editpastshow}
            pastshow={this.props.pastshow}
          />
        </div>
      </div>
    );
  }
}

export default PastShowItem;
