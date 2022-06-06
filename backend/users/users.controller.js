const User = require('./users.model')

const createUser = async (args) => {
  const newUser = {
    firstName: args.firstName,
    lastName: args.lastName,
    age: args.age,
  }
  const response = await User.create(newUser)
  return response
}

// Updating user
const updateUser = async (args) => {
  const id = args.id
  const firstName = args.firstName
  const lastName = args.lastName
  const age = args.age

  // If no updated value is given
  if (!firstName && !lastName && !age) {
    throw new Error('Please enter at least one field')
  }

  const updatedUser = await User.findByIdAndUpdate(
    id,
    { firstName, lastName, age },
    { new: true, runValidators: true }
  )

  console.log(updatedUser)

  // If user is not updated for some reason
  if (!updatedUser) {
    throw new Error('Something went wrong')
  }

  return updatedUser
}

// Deleting user
const deleteUser = async (args) => {
  const deletedUser = await User.findByIdAndDelete(args.id)

  if (!deletedUser) {
    throw new Error('User not found..')
  }

  return deletedUser
}

module.exports = { createUser, updateUser, deleteUser }
