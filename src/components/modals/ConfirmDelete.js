import React, { Component } from 'react';
import { Button, Confirm } from 'semantic-ui-react';

class ConfirmDelete extends Component {
  state = { open: false };

  open = () => {
    this.setState({ open: true });
  };
  close = () => {
    this.props.deletepodcast(this.props.podcast._id);
    console.log(this.props.podcast._id);
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.open}>Show</Button>
        <Confirm
          open={this.state.open}
          onCancel={this.close}
          onConfirm={this.close}
        />
      </div>
    );
  }
}

export default ConfirmDelete;
