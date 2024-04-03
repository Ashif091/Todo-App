import { FaPencilAlt, FaTrash} from "react-icons/fa"
interface Todo {
    id: Date
    todo: String
  }
interface Props {
  todos: Todo[]
  editTodo: (id:Date) => void ;
  removeTodo:(id:Date) => void ;
}
function TodoList({todos, editTodo,removeTodo}: Props) {
  return (
    <div className="bg-gray-100 w-full md:w-3/4 lg:w-2/6 rounded p-6 shadow-md  ">
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className="bg-white flex items-center justify-between rounded shadow-md p-3 mb-3"
          >
            <span className="text-lg max-w-56 overflow-hidden"> {todo.todo} </span>
            <div className="flex">
              <button
                onClick={()=>editTodo(todo.id)}
                className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4  focus:ring-gray-300 dark: font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-2 focus:outline-none "
              >
                <FaPencilAlt />
              </button>
              <button onClick={()=>removeTodo(todo.id)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-100 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-2 ">
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
