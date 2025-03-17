import { useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]); // array of todos
  function handleChange(e) {
    setTask(e.target.value);
  }
  function handleEdit() {}
  function handleDelete() {}
  function handleAdd() {
    setTodos([...todos, { id: uuidv4(), task, isCompleted: false }]);
    setTask("");
  }
  function handleKeyDown(e) {
    if (e.key === "Enter" || e.code === "Enter" || e.which === 13) {
      handleAdd();
    }
  }
  // function handleCheckbox (e) => {
  //   let id=
  // }

  return (
    <>
      <Navbar />
      <div className='container mx-auto my-5 rounded-xl p-5 bg-gray-200 w-2/3 min-h-[70vh]'>
        <div className='addTodo'>
          <h2 className='text-xl font-bold cursor-default'>Add a Todo</h2>
          <input
            type='text'
            className='ml-1 py-0.5 my-4 w-2/5 rounded-md px-2'
            name='task'
            value={task}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleAdd}
            className='ml-4 py-1 rounded-md px-4 bg-gray-900 text-white shrink'
          >
            Add
          </button>
        </div>
        <h3 className='text-md font-semibold mb-3 hover:underline cursor-default'>
          Your Todos
        </h3>
        <ol className='todos flex flex-col gap-4'>
          {todos.map((item, index) => (
            <div className='todo flex' key={index}>
              <input type='checkbox' value={task.isCompleted} name='' id='' />
              <div className='flex text ml-4 font-light font-sans w-1/3 justify-between'>
                <li className='list-decimal list-inside text-clip'>
                  {item.task}
                </li>
                <div className='buttons'>
                  <button
                    onClick={handleEdit}
                    className='ml-3 py-0.5 rounded-md px-2 bg-gray-800 font-extralight text-md text-white'
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    className='ml-3 py-0.5 rounded-md px-2 bg-gray-800 font-extralight text-md text-white'
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ol>
      </div>
    </>
  );
};

export default App;
