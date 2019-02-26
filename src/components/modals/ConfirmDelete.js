import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const ModalBasicExample = () => (
  <Modal trigger={<Button>Delete Podcast</Button>} basic size="small">
    <Header icon="archive" content="Delete Podcast" />
    <Modal.Content>
      <p>Confirm Delete Podcast</p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color="blue" inverted>
        <Icon name="remove" /> No
      </Button>
      <Button color="red" inverted>
        <Icon name="checkmark" /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
);
export default ModalBasicExample;
