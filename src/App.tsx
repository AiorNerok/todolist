import { TodoForm } from 'widgets/todo-form'

function App() {
  return (
    <div className='h-screen flex flex-col items-center justify-start pt-14'>
      <div className='p-8'>
        <h1>TODOS</h1>
        <TodoForm />
      </div>
    </div>
  )
}

export default App
