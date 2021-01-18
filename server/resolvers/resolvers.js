

const messages = [
    {
        message: 'Hello'
    },
    {
        message: 'World'
    }
]

const users = [
    {
        name: 'Rehman Ali',
        username: 'rehmanali1337',
        password: 'pass1',
        phone: '03089442289'
    },
    {
        name: 'Iqbal',
        username: 'iq',
        password: 'password',
        phone: '+000'
    }
]

const resolvers = {
    Query: {
        Messages: () => {
            return messages
        },
        OneMessage(_, { index }) {
            return messages[index]
        },
        Users: () => {
            return users
        },
        User: () => {
            return users[0]
        }
    }
}

module.exports = resolvers