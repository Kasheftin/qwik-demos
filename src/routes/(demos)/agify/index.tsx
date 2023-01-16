import { component$, useStore, useResource$, Resource, useTask$, $ } from '@builder.io/qwik'

export default component$(() => {
  const store = useStore({ name: '', nameImmediate: '' })

  const setAbortableTimeout = $((callback: () => void, delay: number, signal?: AbortSignal) => {
    const internalCallback = () => {
      signal?.removeEventListener('abort', handleAbort)
      callback()
    }
    const handleAbort = () => {
      clearTimeout(internalTimeout)
    }
    signal?.addEventListener('abort', handleAbort)
    const internalTimeout = setTimeout(internalCallback, delay)
  })

  useTask$(({ track, cleanup }) => {
    console.log('nameImmediate trigger')
    track(() => store.nameImmediate)
    const timeout = setTimeout(() => {
      console.log('nameImmediate run')
      store.name = store.nameImmediate
    }, 500)
    cleanup(() => {
      console.log('nameImmediate cleanup')
      // no difference with clearTimeout(timeout) placed here
      // clearTimeout(timeout)
    })
    return () => clearTimeout(timeout)
  })

  const ageResource = useResource$<{ name: string; age: string; count: number }>(async ({ track, cleanup }) => {
    console.log('ageResource trigger for', store.name)
    track(() => store.name)
    const abortController = new AbortController()
    cleanup(() => {
      console.log('ageResource cleanup trigger')
      abortController.abort('cleanup')
    })
    const timeout = (delay: number) => new Promise<void>((resolve) => {
      setAbortableTimeout(resolve, delay, abortController.signal)
    })
    await timeout(1000)
    const res = await fetch(`https://api.agify.io?name=${store.name}`, {
      signal: abortController.signal,
    });
    const json = await res.json()
    console.log('ageResource is loaded', json)
    return json
  })

  return (
    <div>
      <div>
        <input 
          value={store.nameImmediate}
          onInput$={(ev) => {
            store.nameImmediate = (ev.target as HTMLInputElement).value
          }}
          placeholder="Enter your name..."
          class="w-full px-3 h-[36px]"
        />
      </div>
      <Resource
        value={ageResource}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Failed to person data</div>}
        onResolved={(ageGuess) => {
          return (
            <div>
              {store.name && (
                <>
                  {ageGuess.name} {ageGuess.age} years based on {ageGuess.count} entries
                </>
              )}
            </div>
          )
        }}
      />
    </div>
  )
})
