import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useMutation } from '@apollo/client'
import { GET_USERS, CREATE_USER } from '../queries/queries'

function AddUserForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
  })

  const { firstName, lastName, age } = formData

  const [addUser] = useMutation(CREATE_USER, {
    variables: { input: { firstName, lastName, age: parseInt(age) } },
    refetchQueries: [{ query: GET_USERS }],
  })

  const onSubmit = (e) => {
    e.preventDefault()
    addUser()
    setFormData({
      firstName: '',
      lastName: '',
      age: '',
    })
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <>
      <h1>Add User</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group className="pb-2">
          <Form.Control
            placeholder="First Name"
            type="text"
            id="firstName"
            value={firstName}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="pb-2">
          <Form.Control
            placeholder="Last Name"
            type="text"
            id="lastName"
            value={lastName}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="pb-2">
          <Form.Control
            placeholder="Age Name"
            type="text"
            id="age"
            value={age}
            onChange={onChange}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default AddUserForm
