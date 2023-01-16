import { component$, type PropFunction } from '@builder.io/qwik'
import type { Todo } from '@/types'

interface Props {
  todo: Todo
  onChangeCompletion$: PropFunction<(payload: boolean) => void>
  onDelete$: PropFunction<() => void>
}

export default component$((props: Props) => {
  return (
    <div class="qw-todo">
      <input 
        type="checkbox"
        checked={props.todo.isCompleted}
        onChange$={(ev) => {
          props.onChangeCompletion$((ev.target as HTMLInputElement).checked)
        }}
        class="mr-2"
      />
      <div 
        class={{
          'line-through': props.todo.isCompleted
        }}
      >
        {props.todo.title}
      </div>
      <div class="grow" />
      <button
        class="qw-todo__delete"
        onClick$={() => {
          props.onDelete$()
        }}
      >
        &times;
      </button>
    </div>
  )
})
