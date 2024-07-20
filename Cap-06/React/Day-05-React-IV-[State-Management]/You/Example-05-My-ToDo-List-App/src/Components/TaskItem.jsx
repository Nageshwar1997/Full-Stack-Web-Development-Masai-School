/* eslint-disable react/prop-types */

const TaskItem = ({ id, title, status, deleteItem, toggleItem }) => {
  function handleDelete() {
    deleteItem(id);
  }
  function handleToggle() {
    toggleItem(id);
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td style={{ color: status ? "green" : "red" }}>
        {status ? "Completed" : "Not Completed"}
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleToggle}>Toggle Status</button>
      </td>
    </tr>
  );
};

export default TaskItem;
