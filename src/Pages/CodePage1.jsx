import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CodePage1() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <>
      <div className="main flex-col">
        {/* Top  */}
        <div className="head relative"> 
        <Link to="/code"
        className='back'>
        <img src="./icon/arrow_circle_left.png" alt="Back" />
        </Link>
        <h4>CODE</h4>
        </div>

        {/* Botttom */}
        <div className="py-14 px-12 center-flex fin">
          <div className="shadow-xl rounded-b-md">
              <div className='bg-primary text-white text-center rounded-t-md py-4 '>
                <h6>To-Do List</h6>
              </div>
                {/* New Task  */}
                <div className="flex px-8 pt-8">
                <input
                  type="text"
                  className="border px-2 py-3 flex-1 rounded-md mr-2"
                  placeholder="Add a new task .."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}/>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded"
                  onClick={addTask}>
                  Add
                </button>
                </div>

                {/* Task List  */}
                <ul className="grid gap-2 px-8 my-6">
                  {tasks.map((task, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center p-2 border rounded border-gray-300 hover:border-red-300 ">
                      {task.text}
                        <button
                        className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-sm "
                        onClick={() => deleteTask(index)}>
                        Delete
                        </button>
                    </li>
                  ))}
                </ul>
          </div>
        </div>
      </div>
    </>
  );
}
