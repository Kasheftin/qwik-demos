import { component$, $, useContext } from '@builder.io/qwik'
import { sdk } from '@/api'
import { AuthContext } from '.'

export default component$(() => {
  const authContext = useContext(AuthContext)

  const signOut = $(async () => {
    try {
      await sdk.SignOut()
      authContext.user = null
    } catch (error) {
      console.error(error)
    }
  })

  return (
    <div>
      Hi, { authContext.user?.email }
      <button onClick$={signOut} class="qw-button mx-3">
        Sign Out
      </button>
    </div>
  )
})
