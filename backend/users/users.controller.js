const User = require('./users.model')

// Create a user
const createUser = async ({ input }) => {
  const newUser = {
    firstName: input.firstName,
    lastName: input.lastName,
    age: input.age,
  }
  const response = await User.create(newUser)
  return response
}

// Updating user
const updateUser = async ({ input }) => {
  const id = input.id
  const firstName = input.firstName
  const lastName = input.lastName
  const age = input.age

  // If no updated value is given
  if (!firstName && !lastName && !age) {
    throw new Error('Please enter at least one field')
  }

  const updatedUser = await User.findByIdAndUpdate(
    id,
    { firstName, lastName, age },
    { new: true, runValidators: true }
  )

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
