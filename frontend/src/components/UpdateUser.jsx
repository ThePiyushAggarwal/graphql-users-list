import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function UpdateUser({ setShowModal, showModal }) {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Update User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>afdkh</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => setShowModal(false)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UpdateUser
