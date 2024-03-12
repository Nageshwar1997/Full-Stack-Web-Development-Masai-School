import styles from "./AddTask.module.css";
import { useState } from "react";

function AddTask({ addNewTask, data }) {
  const [formState, setFormState] = useState({
    title: "",
    assignee: "",
    priority: "",
    isCompleted: false,
  });

  let nextId = Math.max(...data.map((task) => task.id)) + 1; // Generate a unique ID for the task

  function handleSubmit(e) {
    e.preventDefault();
    addNewTask({
      ...formState,
      id: nextId, // Generate a unique ID for the task
    });
  }

  function handleChange(e) {
    const { name, checked, value, type } = e.target;
    const newValue =
      type === "checkbox" ? checked : name === "priority" ? +value : value;
    setFormState({
      ...formState,
      [name]: newValue,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.addTask}>
        <input
          type="text"
          placeholder="Enter new Task"
          value={formState.title}
          name="title"
          onChange={handleChange}
        />
        <select
          name="assignee"
          onChange={handleChange}
          value={formState.assignee}
        >
          <option value="">Select Assignee</option>
          <option value="Nageshwar">Nageshwar</option>
          <option value="Manjusha">Manjusha</option>
          <option value="Dhanashree">Dhanashree</option>
        </select>
        <select
          name="priority"
          onChange={handleChange}
          value={formState.priority}
        >
          <option value="">Select Priority</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>
          isCompleted :
          <input
            type="checkbox"
            name="isCompleted"
            checked={formState.isCompleted}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </div>
    </form>
  );
}

export default AddTask;
