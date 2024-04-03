import {FaPlus, FaPencilAlt} from "react-icons/fa"

interface Props{
    input:string;
    inputAdd:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    addTodo:()=>void;
    isEdit:boolean;
    editList:()=>void;

}
function AddTodo({inputAdd,input,addTodo,isEdit,editList}:Props) {
  return (
    <>
      <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-2/6">
        <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
        <div className="flex">
          <input
            type="text"
            value={input}
            placeholder="Add a todo"
            className="w-full py-2 border px-4 rounded focus:outline-none mr-2"
            onChange={inputAdd}
          />
          <button
            onClick={!isEdit?addTodo:editList}
            className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4"
          >
            {!isEdit? <FaPlus /> :<FaPencilAlt/>}
           
          </button>
        </div>
      </div>
    </>
  )
}

export default AddTodo
