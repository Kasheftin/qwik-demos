import { component$ } from '@builder.io/qwik'
import Flower from './flower'

export default component$(() => {
  return (
    <div>
      {Array.from(Array(20).keys()).map(() => (
        <p class="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis luctus arcu, ac vulputate purus. Vestibulum sodales mi non hendrerit eleifend. Nam vel lectus sed purus scelerisque rutrum at sit amet metus. Sed erat augue, tempor vel orci eu, luctus egestas velit.
        </p>
      ))}
      <Flower />
    </div>
  )
})
