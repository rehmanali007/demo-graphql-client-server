const { gql } = require('@apollo/client')
const { ApolloClient, InMemoryCache, HttpLink } = require('@apollo/client')
const { fetch } = require('cross-fetch')


const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000', fetch
  })
});
// const client = ...

client
  .query({
    query: gql`
    query{
      OneMessage(index: 1){
        message
      }
    }
    `
  })
  .then(result => console.log(result));