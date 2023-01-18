import { GraphQLClient } from 'graphql-request'
import { getSdk } from './generated/types'

export const client = new GraphQLClient('http://localhost:56997/graphql', { credentials: 'include' })
export const sdk = getSdk(client)
