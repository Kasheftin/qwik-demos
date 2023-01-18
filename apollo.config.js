module.exports = {
  client: {
    service: {
      name: 'pubngn-backend',
      url: 'http://localhost:56997/graphql'
    },
    includes: ['src/api/queries/*.gql']
  }
}
