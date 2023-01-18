import { component$, useStore, $, type QwikKeyboardEvent } from '@builder.io/qwik'
import type { Todo } from '@/types'
import TodoEntry from './TodoEntry'

export default component$(() => {
  const store = useStore({ 
    todos: [
      { id: 1, title: 'First Task', isCompleted: false }, 
      { id: 2, title: 'Second Task', isCompleted: false }, 
      { id: 3, title: 'Third Task', isCompleted: true }
    ] as Todo[],
    filter: {
      search: '',
      showNotCompletedOnly: false
    },
    newTodoTitle: '',
    todoListIsVisible: true
  }, { recursive: true })
  /*
  const store = useStore({..}) is equivalent of const store = reactive({..}) in vue
  const search = useSignal('') is equivalent of const search = ref('') in vue (search.value etc, but different in a template - no shortland syntax from vue)
  */

  const addTodo = $((ev: QwikKeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter' && store.newTodoTitle) {
      store.todos.push({
        id: store.todos.reduce((max, todo) => Math.max(max, todo.id), 0) + 1,
        title: store.newTodoTitle,
        isCompleted: false
      })
      store.newTodoTitle = ''
    }
  })

  /* This will not work: function is not serializeable
  const deleteTodoById = (id: number) => {
    store.todos = store.todos.filter(todo => todo.id !== id)
  }
  */
  const deleteTodoById = $((id: number) => {
    store.todos = store.todos.filter(todo => todo.id !== id)
  })

  const filterTodo = (todo: Todo) => {
    if (store.filter.showNotCompletedOnly && todo.isCompleted) {
      return false
    }
    if (store.filter.search) {
      return todo.title.toLowerCase().includes(store.filter.search.toLowerCase())
    }
    return true
  }

  const filterTodo2 = $((todo: Todo) => {
    if (store.filter.showNotCompletedOnly && todo.isCompleted) {
      return false
    }
    if (store.filter.search) {
      return todo.title.toLowerCase().includes(store.filter.search.toLowerCase())
    }
    return true
  })

  const filteredTodos = store.todos.filter(filterTodo)

  // Why this does not work?
  const filteredTodos2 = store.todos.filter(filterTodo2)

  return (
    <div>
      <div class="bg-slate-200 p-3 flex flex-col gap-1 mb-6 rounded">
        <div>
          <input 
            value={store.filter.search}
            onInput$={(ev) => {
              store.filter.search = (ev.target as HTMLInputElement).value
            }}
            placeholder="Filter by Search..."
            class="w-full px-3 h-[36px]"
          />
        </div>
        <div>
          <label>
            <input 
              type="checkbox"
              checked={store.filter.showNotCompletedOnly}
              onChange$={(ev) => {
                store.filter.showNotCompletedOnly = (ev.target as HTMLInputElement).checked
              }}
              class="mr-2"
            />
            Show not completed only
          </label>
        </div>
        <div>
          <button class="qw-button" onClick$={() => {
            store.todoListIsVisible = !store.todoListIsVisible
          }}
          >
            Toggle Visibility
          </button>
        </div>
      </div>
      {store.todoListIsVisible ? (
        <div>
          <div class="text-xl">
            Todo List {filteredTodos.length} {filteredTodos2.length}
          </div>
          <div class="p-3 flex flex-col gap-3">
            {filteredTodos.filter(filterTodo).map((todo) => (
              <TodoEntry
                key={todo.id}
                todo={todo}
                onChangeCompletion$={(value: boolean) => { todo.isCompleted = value }}
                onDelete$={() => { deleteTodoById(todo.id) }}
              />
            ))}
            <div>
              <input 
                value={store.newTodoTitle}
                placeholder="Type a New Todo and press ENTER"
                class="w-full px-3 h-[36px]"
                onInput$={(ev) => {
                  store.newTodoTitle = (ev.target as HTMLInputElement).value
                }}
                onKeyDown$={addTodo}
              />
            </div>
          </div>
        </div>
      ) : ''}
    </div>
  )
})
