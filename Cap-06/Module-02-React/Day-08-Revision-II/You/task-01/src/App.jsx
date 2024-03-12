import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [formState, setFormState] = useState({
    title: "",
    priority: "",
    isCompleted: false,
    assignee: "",
    id: 0,
  });
  const [data, setData] = useState([]);
  async function fetchPosts() {
    try {
      let resp = await fetch(`http://localhost:3004/tasks`);
      let data = await resp.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  function handleChange(e) {
    const { name, checked, value, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormState({
      ...formState,
      [name]: newValue,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3004/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          id: Math.max(...data.map((task) => task.id)) + 1,
        }),
      });
      const newData = await response.json();
      setData((prevData) => [...prevData, newData]); // Update UI with new task
      setFormState({
        title: "",
        priority: "",
        isCompleted: false,
        assignee: "",
      });
    } catch (error) {
      console.error("Error adding task:", error);
    }
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div id="add-task">
          <input
            type="text"
            name="title"
            value={formState.title}
            onChange={handleChange}
            placeholder="Add Task"
          />
          <select name="assignee" onChange={handleChange} value={formState.assignee}>
            <option value="">Select Assignee</option>
            <option value="Nageshwar">Nageshwar</option>
            <option value="Manjusha">Manjusha</option>
            <option value="Dhanashree">Dhanashree</option>
          </select>
          <select name="priority" onChange={handleChange} value={formState.priority}>
            <option value="">Select Priority</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label>
            Completed
            <input type="checkbox" name="isCompleted" checked={formState.isCompleted} onChange={handleChange}/>
          </label>
          <input type="submit" name="submit" />
        </div>
      </form>
      <h1>Task List</h1>
      <div>
        {data.map((task) => (
          <div key={task.id} style={{ border: "1px solid black" }}>
            <p>ID : {task.id}</p>
            <p>Task : {task.title}</p>
            <p>Priority : {task.priority}</p>
            <p>Completed : {task.isCompleted ? "Yes" : "No"}</p>
            <p>Assignee : {task.assignee}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
