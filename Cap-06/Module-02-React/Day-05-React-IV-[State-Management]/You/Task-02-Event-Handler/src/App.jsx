import { useState } from "react";
import "./App.css";

function App() {
  // Define state variables for tasks and form inputs
  const [tasks, setTasks] = useState([]); // State variable to hold the list of tasks
  const [formState, setFormState] = useState({
    // State variable to hold the form input values
    title: "",
    completed: false,
    assignedTo: "",
    id: null, // ID to identify the task being edited
  });

  // Function to handle changes in form inputs
  function handleChange(event) {
    const formInputValue =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const newFormState = {
      ...formState,
      [event.target.name]: formInputValue,
    };
    setFormState(newFormState);
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // Create a new task object with the form input values
    const newTask = {
      ...formState,
      id: Date.now() + Math.random(), // Generate a unique ID for the task
    };
    // Add the new task to the tasks list
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    // Clear the form input values after submission
    setFormState({ title: "", completed: false, assignedTo: "", id: null });
  }

  // Function to handle editing a task
  function handleEdit(id) {
    // Find the task with the specified ID
    const selectedTask = tasks.find((t) => t.id === id);
    // Set the form input values to the selected task
    setFormState(selectedTask);
    // Delete the edited task from the tasks list
    handleDelete(id);
  }

  // Function to handle deleting a task
  function handleDelete(id) {
    // Filter out the task with the specified ID from the tasks list
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <>
      <div>
        {/* Form for adding/editing tasks */}
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            type="text"
            placeholder="Add new task"
            onChange={handleChange}
            value={formState.title}
          />
          <br />
          <label htmlFor="completed">
            Completion status
            <input
              name="completed"
              type="checkbox"
              id="completed"
              onChange={handleChange}
              checked={formState.completed}
            />
          </label>
          <br />
          <select
            name="assignedTo"
            onChange={handleChange}
            value={formState.assignedTo}
          >
            <option value="">Assign Task to</option>
            <option value="Nageshwar">Nageshwar</option>
            <option value="Manjusha">Manjusha</option>
            <option value="Dhanashree">Dhanashree</option>
          </select>
          <br />
          {/* Button text dynamically changes based on form state */}
          <button>{formState.id === null ? "Add Task" : "Update Task"}</button>
        </form>
      </div>
      <div>
        {/* Table to display the list of tasks */}
        <table border={1}>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Title</th>
              <th>Status</th>
              <th>Assigned To</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through tasks list and render each task as a table row */}
            {tasks.map((task, index) => (
              <tr key={task.id}>
                <td>{index + 1}</td>
                <td>{task.title}</td>
                <td style={{ color: task.completed ? "green" : "red" }}>
                  {task.completed ? "Completed" : "Not Completed"}
                </td>
                <td>{task.assignedTo}</td>
                <td>
                  {/* Button to edit task */}
                  <button onClick={() => handleEdit(task.id)}>Edit</button>
                  {/* Button to delete task */}
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
