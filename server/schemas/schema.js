const { gql } = require('apollo-server')


const typeDefs = gql`
type Message {
    message : String
}

type User{
    name: String
    username: String
    password: String
    phone: String
}

type Query {
    Users : [User]
    Messages : [Message]
    User: User
    OneMessage (index:Int) : Message
}
`
module.exports = typeDefs
