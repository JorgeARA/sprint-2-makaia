import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalList = ({show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>¿A dónde viajas?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">Acapulco</a>
                <a href="#" class="list-group-item list-group-item-action">Aeropuerto Chicago</a>
                <a href="#" class="list-group-item list-group-item-action">Aeropuerto Los Angeles</a>
                <a href="#" class="list-group-item list-group-item-action">Aguascalientes</a>
                <a href="#" class="list-group-item list-group-item-action">Albany</a>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
};
export default ModalList;