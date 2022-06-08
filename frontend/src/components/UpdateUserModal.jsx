import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_USER, GET_USERS } from '../queries/queries'

function UpdateUserModal({ setShowModal, showModal, user }) {
  const [formData, setFormData] = useState(user)

  const { id, firstName, lastName, age } = formData

  // Update user mutation
  const [updateUser] = useMutation(UPDATE_USER, {
    variables: { input: { id, firstName, lastName, age: parseInt(age) } },
    refetchQueries: [{ query: GET_USERS }],
  })

  const onSubmit = (e) => {
    e.preventDefault()
    updateUser()
    setShowModal(false)
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      // dialogClassName="modal-width-80"
      // size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Update User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="pb-4">
            <Form.Control
              disabled={true}
              type="text"
              id="id"
              value={id}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="pb-4">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder="First Name"
              type="text"
              id="firstName"
              value={firstName}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="pb-4">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              placeholder="Last Name"
              type="text"
              id="lastName"
              value={lastName}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="pb-4">
            <Form.Label>Age</Form.Label>
            <Form.Control
              placeholder="Age Name"
              type="text"
              id="age"
              value={age}
              onChange={onChange}
            />
          </Form.Group>
          <div className="d-flex flex-row justify-content-around">
            <Button type="submit" variant="primary">
              Submit
            </Button>
            <Button
              variant="secondary"
              onClick={() => setShowModal(false)}
              type="button"
            >
              Close
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default UpdateUserModal
