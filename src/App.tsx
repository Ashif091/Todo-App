import {useState, useEffect} from "react"
import "./App.css"
import "./index.css"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

function App() {
  interface Todo {
    id: Date
    todo: string
  }

  const [todos, setTodos] = useState<Todo[] | []>(
    JSON.parse(localStorage.getItem("todo") as string) || []
  )
  const [input, setInput] = useState("")
  const [editId, setEditId] = useState(new Date())
  const [isEdit, setEdit] = useState(false)


  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, {id: new Date(), todo: input}])
      setInput("")
    }
  }
  const editTodo = (id: Date) => {
    const Todo = todos.find((todo) => todo.id === id)
    setEdit(!isEdit)
    if (Todo) {
      setInput(Todo.todo)
      setEditId(id)
    }
  }
  const editList = () => {
    if (editId && input.trim() !== "") {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? {...todo, todo: input} : todo
        )
      )
      setEdit(!isEdit)
      setInput("")
    }
  }
  const removeTodo = (id: Date) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <div className="min-h-screen flex flex-col gap-4 items-center justify-center p-4 bg-custom-background bg-center bg-cover">
        
        <AddTodo
          addTodo={addTodo}
          input={input}
          inputAdd={(e) => setInput(e.target.value)}
          isEdit={isEdit}
          editList={editList}
        />

        {todos.length > 0 && (
          <TodoList todos={todos} editTodo={editTodo} removeTodo={removeTodo} />
        )}
      </div>
    </>
  )
}

export default App
