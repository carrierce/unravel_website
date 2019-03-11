import React, { Component } from 'react';
import { Button, Confirm } from 'semantic-ui-react';

class ConfirmDeletePastShow extends Component {
  state = { open: false };

  open = () => {
    this.setState({ open: true });
  };
  close = () => {
    this.setState({ open: false });
  };

  deletePastShow = () => {
    this.props.deletepastshow(this.props.pastshow._id);
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <Button className="negative ui button" onClick={this.open}>
          Delete Past Show
        </Button>
        <Confirm
          header="Confirm Delete Past Show"
          content="Are you sure you want to delete this past show?"
          cancelButton="Cancel"
          confirmButton="Delete Past Show"
          open={this.state.open}
          onCancel={this.close}
          onConfirm={this.deletePastShow}
        />
      </div>
    );
  }
}

export default ConfirmDeletePastShow;
