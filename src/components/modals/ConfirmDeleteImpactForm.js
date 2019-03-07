import React, { Component } from 'react';
import { Button, Confirm } from 'semantic-ui-react';

class ConfirmDeleteImpactForm extends Component {
  state = { open: false };

  open = () => {
    this.setState({ open: true });
  };
  close = () => {
    this.setState({ open: false });
  };

  deleteImpactForm = () => {
    this.props.deleteimpactform(this.props.impactform._id);
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <Button className="negative ui button" onClick={this.open}>
          Delete Impact Form
        </Button>
        <Confirm
          header="Confirm Delete Impact Form"
          content="Are you sure you want to delete this impact form?"
          cancelButton="Cancel"
          confirmButton="Delete Impact Form"
          open={this.state.open}
          onCancel={this.close}
          onConfirm={this.deleteImpactForm}
        />
      </div>
    );
  }
}

export default ConfirmDeleteImpactForm;
