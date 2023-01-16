import { component$, Slot } from '@builder.io/qwik'
import { type DocumentHead, Link } from '@builder.io/qwik-city'
import { demos } from '@/constants'

export default component$(() => {
  return (
    <div class="qw-container">
      <div class="qw-card">
        <Slot />
      </div>
      <div class="qw-card__under flex justify-end">
        <Link href="/" class="qw-link">
          Back to Demos List
        </Link>
      </div>
    </div>
  )
})

export const head = ({ pathname }: { pathname: string }): DocumentHead => {
  const demo = demos.find(demo => demo.link === pathname)
  if (demo) {
    return {
      title: demo.title,
      meta: [
        {
          name: 'description',
          content: demo.description
        }
      ]
    }
  } else {
    return {}
  }
}
