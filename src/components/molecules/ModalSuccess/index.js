import React from 'react';
import Modal from 'react-bootstrap/Modal';
import checked from '../../../assets/checked.svg';

const ModalSuccess = (props) => {
  return (
    <Modal {...props} size="sm" centered>
      <Modal.Body className="d-flex flex-column justify-content-center align-items-center my-3">
        <img src={checked} alt="" width={120} className="mb-4"/>
        Member suceesfully added
      </Modal.Body>
    </Modal>
  )
}

export default ModalSuccess;