import { gql } from '@apollo/client'

const CREATE_USER = gql`
  mutation ($input: CreateUserInput) {
    createUser(input: $input) {
      id
      firstName
      lastName
      age
    }
  }
`

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

const UPDATE_USER = gql`
  mutation ($input: UpdateUserInput) {
    updateUser(input: $input) {
      id
    }
  }
`

export { CREATE_USER, DELETE_USER, GET_USERS, UPDATE_USER }
