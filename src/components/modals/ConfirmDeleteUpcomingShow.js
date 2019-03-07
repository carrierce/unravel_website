import React, { Component } from 'react';
import { Button, Confirm } from 'semantic-ui-react';

class ConfirmDeleteUpcomingShow extends Component {
  state = { open: false };

  open = () => {
    this.setState({ open: true });
  };
  close = () => {
    this.setState({ open: false });
  };

  deleteupcomingshow = () => {
    this.props.deleteupcomingshow(this.props.upcomingshow._id);
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <Button className="negative ui button" onClick={this.open}>
          Delete Upcoming Show
        </Button>
        <Confirm
          header="Confirm Delete Upcoming Show"
          content="Are you sure you want to delete this upcoming show?"
          cancelButton="Cancel"
          confirmButton="Delete Upcoming Show"
          open={this.state.open}
          onCancel={this.close}
          onConfirm={this.deleteupcomingshow}
        />
      </div>
    );
  }
}

export default ConfirmDeleteUpcomingShow;
