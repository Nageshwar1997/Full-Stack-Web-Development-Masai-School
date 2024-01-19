Update the missing piece and write logic to update form elements like input,checkbox, select using useState hook

## Template
import { useState } from "react";

function App() {
  const [formState, setFormState] = useState({
    title: "",
    completed: false,
    assignedTo: "",
  });

  function handleChange(event) {
    // logic to update the input value should go here;
    
  }

  return (
    <>
      <form>
        <input
          name="title"
          placeholder="Add new task"
        />
        <br />
        <br />
        <label htmlFor="completed">
          Completion Status
          <input
            name="completed"
            type="checkbox"
            id="completed"
          />
        </label>
        <br />
        <br />
        <select
          name="assignedTo"
          
        >
          <option value="">Assign Task to</option>
          <option value="Amar">Amar</option>
          <option value="Akbar">Akbar</option>
          <option value="Anthony">Anthony</option>
        </select>
      </form>
    </>
  );
}

export default App;

