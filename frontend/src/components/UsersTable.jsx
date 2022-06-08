import UserDetails from './UserDetails'
import Table from 'react-bootstrap/Table'
import { useQuery } from '@apollo/client'
import { GET_USERS } from '../queries/queries'

function UsersTable() {
  const { loading, data, error } = useQuery(GET_USERS)

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
        {data?.getUsers?.length >= 1 ? (
          data?.getUsers?.map((user, index) => (
            <UserDetails key={user.id} user={user} index={index} />
          ))
        ) : (
          <tr>
            <td colSpan={5}>No users at present</td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

export default UsersTable
