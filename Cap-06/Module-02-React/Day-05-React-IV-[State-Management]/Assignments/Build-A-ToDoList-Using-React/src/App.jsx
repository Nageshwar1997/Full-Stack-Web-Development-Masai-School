import React, { useState } from "react";
import "./App.css";
import TaskItem from "./Components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    // Implement logic to handle form changes
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: newValue,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    if (formState.task !== "" && formState.taskAssignedTo !== "") {
      setTasks((prevTasks) => [...prevTasks, { ...formState }]);
      setFormState({
        task: "",
        completed: false,
        taskAssignedTo: "",
      });
    }
  }

  function handleDelete(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  function handleToggleComplete(index) {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="task"
            type="text"
            placeholder="Add Task"
            value={formState.task}
            onChange={handleChange}
          />
          <label>
            Completed:
            <input
              name="completed"
              type="checkbox"
              checked={formState.completed}
              onChange={handleChange}
            />
          </label>
          <select
            name="taskAssignedTo"
            value={formState.taskAssignedTo}
            onChange={handleChange}
          >
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>Task</th>
            <th>Assigned To</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task.task}
              completed={task.completed}
              taskAssignedTo={task.taskAssignedTo}
              onDelete={() => handleDelete(index)}
              onToggleComplete={() => handleToggleComplete(index)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
