import React from "react";
import "./TaskItem.css";

function TaskItem({ task, completed, taskAssignedTo, onDelete, onToggleComplete }) {
  return (
    <tr>
      <td>{task}</td>
      <td>{taskAssignedTo}</td>
      <td className={completed ? "completed" : "inCompleted"}>{completed ? "Yes" : "No"}</td>
      <td>
        <button onClick={onDelete}>Delete Task</button>
        <button onClick={onToggleComplete}>
          {completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
      </td>
    </tr>
  );
}

export default TaskItem;
