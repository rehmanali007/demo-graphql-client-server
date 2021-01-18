const { ApolloServer } = require('apollo-server')
let typeDefs = require('./schemas/schema')
let resolvers = require('./resolvers/resolvers')


const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`Server is running at : ${url}`)
})