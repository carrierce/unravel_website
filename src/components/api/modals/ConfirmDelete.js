import React, { Component } from 'react';
import { Button, Confirm } from 'semantic-ui-react';

class ConfirmDelete extends Component {
  state = { open: false };

  open = () => {
    this.setState({ open: true });
  };
  close = () => {
    this.setState({ open: false });
  };

  deletepodcast = () => {
    this.props.deletepodcast(this.props.podcast._id);
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button className="negative ui button" onClick={this.open}>
          Delete Podcast
        </Button>
        <Confirm
          header="Confirm Delete Podcast"
          content="Are you sure you want to delete this podcast?"
          cancelButton="Cancel"
          confirmButton="Delete Podcast"
          open={this.state.open}
          onCancel={this.close}
          onConfirm={this.deletepodcast}
        />
      </div>
    );
  }
}

export default ConfirmDelete;
