import Button from 'react-bootstrap/Button'
import { GET_USERS, DELETE_USER } from '../queries/queries'
import { useMutation } from '@apollo/client'
import UpdateUserModal from './UpdateUserModal'
import { useState } from 'react'

function UserDetails({ user, index }) {
  // Delete the user details and refetch the details
  const [onClickDelete] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  })

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.age}</td>
        <td className="d-flex flex-row justify-content-around">
          <Button
            className="me-2"
            variant="primary"
            onClick={() => onClickDelete({ variables: { id: user.id } })}
          >
            Delete
          </Button>
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Update
          </Button>
        </td>
      </tr>
      <UpdateUserModal
        setShowModal={setShowModal}
        showModal={showModal}
        user={user}
      />
    </>
  )
}

export default UserDetails
