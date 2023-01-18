import { component$, useStore, $, useContext } from '@builder.io/qwik'
import { sdk } from '@/api'
import { AuthContext } from '.'

export default component$(() => {
  const state = useStore({ 
    form: {
      email: 'kasheftin@gmail.com',
      password: 'nr3724fh'
    },
    errorMessage: ''
  })
  const authContext = useContext(AuthContext)

  const signIn = $(async () => {
    state.errorMessage = ''
    try {
      const data = await sdk.SigninLocal({ data: { email: state.form.email, password: state.form.password }})
      authContext.user = data.signinLocal
    } catch (error) {
      state.errorMessage = (error as any)?.response?.errors?.[0]?.message
    }
  })

  return (
    <div>
      <div class="my-3 font-bold">
        Login
      </div>
      {state.errorMessage ? (
        <div class="bg-red-500 p-3 my-3 text-white">
          { state.errorMessage }
        </div>
      ) : ''}
      <input 
        placeholder="Email" 
        value={state.form.email} 
        onInput$={(ev) => { state.form.email = (ev.target as HTMLInputElement).value }} 
        class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
      />
      <input 
        placeholder="Password" 
        type="password" 
        value={state.form.password} 
        onInput$={(ev) => { state.form.password = (ev.target as HTMLInputElement).value }} 
        class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
      />
      <button class="qw-button mt-3" onClick$={signIn}>
        Sign In
      </button>
    </div>
  )
})
