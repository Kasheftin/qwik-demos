import { component$, useStore } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Link } from '@builder.io/qwik-city'
import { demos } from '../constants'

export default component$(() => {
  /* does not work
  useStyles$(`
    .qw-demo-link {
      @apply p-4 rounded bg-slate-100;
    }
    .qw-demo-link:hover {
      @apply bg-rose-800 shadow;
    }
  `)
  */
  const store = useStore({ hoveredLink: '' })
  // Instead of <div class="container mx-auto min-h-full h-full flex flex-col items-center justify-center">
  // Do this <div class="qw-container"> .qw-container { @apply container mx-auto min-h-full h-full flex flex-col items-center justify-center; }
  return (
    <div class="qw-container">
      <div class="qw-demo-entries">
        {demos.map((demo) => (
          <div 
            class={{
              'qw-demo-entry': true,
              'qw-demo-entry--active': store.hoveredLink === demo.link
            }}
          >
            <Link 
              href={demo.link} 
              class="qw-demo-entry__link"
              onMouseEnter$={() => { store.hoveredLink = demo.link }}
              onMouseLeave$={() => { store.hoveredLink = '' }}
            >
              {demo.title}
            </Link>
            {demo.description ? (
              <p class="qw-demo-entry__description">
                {demo.description}
              </p>
            ) : ''}
          </div>
        ))}
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Qwik Demo List',
  meta: [
    {
      name: 'description',
      content: 'A list of demos',
    }
  ]
}
