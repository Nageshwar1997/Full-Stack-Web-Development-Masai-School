import styles from "./TaskItem.module.css";

function TaskItem(props) {
  // console.log(props);
  const { id, title, assignee, priority, isCompleted, updateExistingTask, deleteExistingTask } =
    props;

  function handleToggle() {
    console.log(id, "toggled");
    updateExistingTask(id, { isCompleted: !isCompleted });
  }
  function handleDelete() {
    console.log(id, "deleted");
    deleteExistingTask(id);
  }
  return (
    <tr className={styles.taskItem}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{assignee}</td>
      <td>{priority}</td>
      <td>{isCompleted ? "Yes" : "No"}</td>
      <td>
        <button onClick={handleToggle} className={styles.toggle}>Toggle Complete</button>
        <button onClick={handleDelete} className={styles.delete}>Delete Task</button>
      </td>
    </tr>
  );
}

export default TaskItem;
