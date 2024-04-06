import {useState, useEffect} from "react"
import "./App.css"
import "./index.css"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import ThemeChager from "./components/ThemeChager"
import toast, {Toaster} from "react-hot-toast"
function App() {
  interface Todo {
    id: Date
    todo: string
  }


  const [todos, setTodos] = useState<Todo[] | []>(
    JSON.parse(localStorage.getItem("todo") as string) || []
  )
  const [theme, setTheme] = useState<Number>(
    JSON.parse(localStorage.getItem("theme") as string) || 1
  )
  const [input, setInput] = useState("")
  const [editId, setEditId] = useState(new Date())
  const [isEdit, setEdit] = useState(false)

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])
  const chageTheme = (data:number)=>{
    setTheme(data)
  }
  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, {id: new Date(), todo: input}])
      setInput("")
      toast.success("Successfully Created")
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
      toast.success("Successfully Edited")
    }
  }
  const undoAction = (info: Date, data: string) => {
    setTodos((todos) => [...todos, {id: info, todo: data}])
    toast.success("Successfully Added")
  }
  const removeTodo = (id: Date) => {
    const todoToUndo = todos.find((todo) => todo.id === id)
    if (todoToUndo) {
      setTodos((todos) => todos.filter((todo) => todo.id !== id))
      toast((t) => (
        <span className="flex flex-row  gap-3">
          <span className="text-red-500 ">Todo  Deleted</span>
          
          <button
            className="bg-blue-500 border border-sky-800 ring-2 text-sm rounded-sm text-white "
            onClick={() => {
              undoAction(id, todoToUndo.todo)
              toast.dismiss(t.id)
            }}
          >
            Undo
          </button>
        </span>
      ))
    }
  }

  return (
    <>
      <div className={`min-h-screen flex flex-col gap-4 items-center p-4 bg-custom-background-${theme} bg-center bg-cover`}>
        <div className="w-full flex justify-end mb-10 ">
          <ThemeChager chageTheme={chageTheme} theme={theme}/>
        </div>
        <Toaster />

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
