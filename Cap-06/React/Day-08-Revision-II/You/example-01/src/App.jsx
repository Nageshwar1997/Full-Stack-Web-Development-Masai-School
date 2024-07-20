import { useState, useEffect } from "react";
import "./App.css";
import { LoadingIndicator } from "./Components/LoadingIndicator";
import { ErrorIndicator } from "./Components/ErrorIndicator";
import TaskItem from "./Components/TaskItem";
import AddTask from "./Components/AddTask";
async function gethData(url) {
  try {
    let resp = await fetch(url);
    let data = await resp.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

function App() {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchAndUpdateData() {
    setLoading(true);
    try {
      let finalData = await gethData(`http://localhost:3001/tasks`);
      // console.log(finalData);
      setData(finalData);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  }
  async function postData(url, data) {
    try {
      let resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let finalResponse = await resp.json();
      return finalResponse;
    } catch (error) {
      console.log(error);
    }
  }
  async function addNewTask(newTask) {
    try {
      await postData("http://localhost:3001/tasks", newTask);
      fetchAndUpdateData();
    } catch (error) {
      console.log(error);
    }
  }

  async function updateExistingTask(taskId, body) {
    try {
      await fetch(`http://localhost:3001/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      fetchAndUpdateData();
    } catch (error) {
      console.log(error);
    }
  }

async function deleteExistingTask(taskId) {
  try {
    await fetch(`http://localhost:3001/tasks/${taskId}`, {
      method: "DELETE",
    });
    fetchAndUpdateData();
  } catch (error) {
    console.log(error);
  }
}


  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  if (Loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div className="App">
      <AddTask addNewTask={addNewTask} data={data} />
      <hr />
      <h1>Tasks</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task Title</th>
            <th>Assignee</th>
            <th>Priority</th>
            <th>Is Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((task) => (
            <TaskItem
              key={task.id}
              {...task}
              updateExistingTask={updateExistingTask}
              deleteExistingTask={deleteExistingTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
