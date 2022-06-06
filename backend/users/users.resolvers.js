const User = require('./users.model')
const { createUser, updateUser, deleteUser } = require('./users.controller')

module.exports = {
  Query: {
    getUsers: async () => await User.find(),
  },
  Mutation: {
    createUser: async (_, args) => {
      return createUser(args)
    },
    updateUser: async (_, args) => {
      return updateUser(args)
    },
    deleteUser: async (_, args) => {
      return deleteUser(args)
    },
  },
}
