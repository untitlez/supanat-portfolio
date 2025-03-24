"use client";
import { useState } from "react";

export default function ToDoList() {
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
    <main
      data-theme="dark"
      className="h-screen grid place-items-center bg-primary"
    >
      {/* Mobile View */}
      <section className="mockup-phone border-2 border-base-content sm:hidden">
        <div className="camera"></div>
        <div className="display">
          <article className="artboard artboard-demo phone-1 flex justify-start gap-6 px-6 pt-10">
            <header className="flex gap-2 w-full">
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Add a new task .."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button className="btn btn-accent" onClick={addTask}>
                Add
              </button>
            </header>

            <ul className="grid gap-3 w-full">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="input input-bordered flex justify-between items-center"
                >
                  {task.text}
                  <button
                    className="btn btn-sm btn-outline btn-accent"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Desktop View */}
      <section className="mockup-browser bg-base-300 border shadow-xl hidden sm:block">
        <div className="mockup-browser-toolbar">
          <p className="input">To-Do-List</p>
        </div>
        <article className="bg-base-200 flex flex-col items-center gap-8 p-8">
          <header className="flex gap-4 w-full">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Add a new task .."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") addTask();
              }}
            />
            <button className="btn btn-accent" onClick={addTask}>
              Add
            </button>
          </header>

          <ul className="grid gap-3 w-full">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="input input-bordered flex justify-between items-center"
              >
                {task.text}
                <button
                  className="btn btn-sm btn-outline btn-accent"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
