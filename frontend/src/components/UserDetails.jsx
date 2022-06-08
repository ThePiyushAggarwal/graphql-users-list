import Button from 'react-bootstrap/Button'
import { GET_USERS, DELETE_USER } from '../queries/queries'
import { useMutation } from '@apollo/client'

function UserDetails({ user, index }) {
  const [onClickDelete] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  })

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.age}</td>
      <td>
        <Button
          variant="primary"
          onClick={() => onClickDelete({ variables: { id: user.id } })}
        >
          Delete
        </Button>
      </td>
    </tr>
  )
}

export default UserDetails
