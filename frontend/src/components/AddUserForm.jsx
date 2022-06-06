import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { gql, useMutation } from '@apollo/client'

const CREATE_USER = gql`
  mutation CreateUser($firstName: String!, $lastName: String!, $age: Int!) {
    createUser(firstName: $firstName, lastName: $lastName, age: $age) {
      firstName
    }
  }
`

function AddUserForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
  })

  const { firstName, lastName, age } = formData

  const [addUser] = useMutation(CREATE_USER, {
    variables: { firstName, lastName, age: parseInt(age) },
  })

  const onSubmit = (e) => {
    e.preventDefault()
    addUser()
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
        <Form.Group>
          <Form.Control
            placeholder="First Name"
            type="text"
            id="firstName"
            value={firstName}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            placeholder="Last Name"
            type="text"
            id="lastName"
            value={lastName}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
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
