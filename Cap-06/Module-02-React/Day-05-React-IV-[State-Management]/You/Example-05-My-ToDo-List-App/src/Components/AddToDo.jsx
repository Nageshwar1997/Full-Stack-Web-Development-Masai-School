/* eslint-disable react/prop-types */
import { useState } from "react";

const AddToDo = ({ addItem }) => {
  const [taskName, setTaskName] = useState("");

  const [id, setId] = useState(1);
  function handleAddButtonClick() {
    const newTask = {
      id: id,
      title: taskName,
      status: false,
    };
    setTaskName("");
    addItem(newTask);
    setId(id + 1);
    // console.log(newTask);
  }

  function handleInputChange(event) {
    setTaskName(event.target.value);
  }
  return (
    <>
      <div className="add-todo">
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="Add Your Task Here"
          value={taskName}
        />
        <button onClick={handleAddButtonClick}>Add ToDo</button>
      </div>
    </>
  );
};

export default AddToDo;
