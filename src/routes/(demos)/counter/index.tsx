import { component$, useStore } from '@builder.io/qwik'
import SubMessage from './SubMessage'

export default component$(() => {
  const store = useStore({ counter: 95 })
  return (
    <div>
      <p>
        Counter Value: {store.counter}
      </p>
      {store.counter > 99 ? (
        <SubMessage />
      ) : ''}
      <p class="flex gap-4 mt-3">
        <button class="qw-button" onClick$={() => { store.counter++ }}>
          Increase
        </button>
        <button class="qw-button" onClick$={() => { store.counter-- }}>
          Decrease
        </button>
      </p>
    </div>
  )
})
