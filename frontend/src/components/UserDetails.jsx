import Button from 'react-bootstrap/Button'

function UserDetails({ user, index, onClickDelete }) {
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
