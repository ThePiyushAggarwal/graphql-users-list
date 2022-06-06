import UserDetails from './UserDetails'
import Table from 'react-bootstrap/Table'
import { useQuery, gql, useMutation } from '@apollo/client'

const GET_USERS = gql`
  query {
    getUsers {
      id
      firstName
      lastName
      age
    }
  }
`

const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      firstName
    }
  }
`

function UsersTable() {
  const { loading, data, error, refetch } = useQuery(GET_USERS)

  const [onClickDelete, { data: a }] = useMutation(DELETE_USER)

  if (a) {
    refetch()
  }

  if (error) return <h1>{error.message}</h1>

  if (loading) return <h1>Loading...</h1>

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.getUsers?.map((user, index) => (
          <UserDetails
            key={user.id}
            user={user}
            index={index}
            onClickDelete={onClickDelete}
          />
        ))}
      </tbody>
    </Table>
  )
}

export default UsersTable
