import { component$, useStore, createContext, useContextProvider, useTask$ } from '@builder.io/qwik'
import { isServer, isBrowser } from '@builder.io/qwik/build'
import { getSdk, type MeQuery, type AuthUserFragment } from '@/api/generated/types'
import { useEndpoint, type RequestHandler } from '@builder.io/qwik-city'
import { sdk } from '@/api'
import Login from './Login'
import Profile from './Profile'
import { GraphQLClient } from 'graphql-request'

export const onGet: RequestHandler = async ({ cookie }) => {
  try {
    const jwt = cookie.get('jwt')?.value
    if (jwt) {
      const clientSSR = new GraphQLClient('http://localhost:56997/graphql', { credentials: 'include', headers: { Authorization: `Bearer ${jwt} ` } })
      const sdkSSR = getSdk(clientSSR)
      return await sdkSSR.Me()
    }
  } catch (error) {
    console.log('Failed to authenticate')
  }
  return null
}

export const AuthContext = createContext<{ user: null | AuthUserFragment }>('auth-context')

export default component$(() => {
  const state = useStore<{ user: null | AuthUserFragment }>({
    user: null
  })
  useContextProvider(AuthContext, state)

  const onGetUser = useEndpoint<MeQuery | null>()

  useTask$(async () => {
    if (isServer) {
      const data = await onGetUser.value
      state.user = data?.me || null
      console.log('server', data)
    } else if (isBrowser) {
      try {
        const data = await sdk.Me()
        state.user = data.me
      } catch (error) {
        console.log('Failed to authenticate', error)
      }
    }
  })

  return (
    <div>
      <div class="my-3 font-bold">
        Authentication: { state.user ? 'Authenticated' : 'Not authenticated' }
      </div>
      { state.user ? (<Profile />) : (<Login />) }
    </div>
  )
})
