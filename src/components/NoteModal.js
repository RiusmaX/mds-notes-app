import React from 'react';
import Modal from 'react-modal'
import NoteForm from './NoteForm';

class NoteModal extends React.Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isModalOpen}
      >
        <NoteForm />
        <button onClick={() => this.props.closeModal()}>Fermer Modal</button>
      </Modal>
    )
  }
}

export default NoteModal;
