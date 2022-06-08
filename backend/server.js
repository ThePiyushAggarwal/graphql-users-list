require('dotenv').config()
const PORT = process.env.PORT || 5000
const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core')
const express = require('express')
const http = require('http')
const connectDB = require('./config/db')

// These get all the typeDefs and resolvers
const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const typesArray = loadFilesSync('**/*.graphql')
const resolversArray = loadFilesSync('**/*.resolvers.js')
const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
})

// Apollo Server function. Boilderplate from documentation
async function startApolloServer() {
  const app = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })

  await server.start()

  await connectDB()

  server.applyMiddleware({ app })
  await new Promise((resolve) => httpServer.listen(PORT, resolve))
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
}

startApolloServer()
