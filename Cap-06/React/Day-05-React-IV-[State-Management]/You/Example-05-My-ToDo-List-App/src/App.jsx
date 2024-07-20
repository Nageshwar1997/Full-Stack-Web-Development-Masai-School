import { useState } from "react";
import TaskItem from "./Components/TaskItem";
import AddTodo from "./Components/AddToDo";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]);

  function addItem(newTask) {
    const updatedTaskList = [...taskList, newTask];

    setTaskList(updatedTaskList);
  }

  function deleteItem(taskId) {
    const updatedTaskList = taskList.filter((task) => task.id !== taskId);

    setTaskList(updatedTaskList);
  }

  function toggleItem(taskId) {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTaskList(updatedTaskList);
  }
  return (
    <>
      <AddTodo addItem={addItem} />
      <div>
        <h5>List Of Tasks</h5>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task Name</th>
              <th>Status</th>
              <th>Edit / Delete Task</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((task) => (
              <TaskItem
                key={task.id}
                id={task.id}
                title={task.title}
                status={task.status}
                deleteItem={deleteItem}
                toggleItem={toggleItem}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
