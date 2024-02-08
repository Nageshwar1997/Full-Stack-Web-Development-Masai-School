import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      let resp = await fetch(`https://jsonplaceholder.typicode.com/todos`);

      let finalData = await resp.json();
      setData(finalData);
      console.log(finalData);
    } catch (error) {
      console.log(error);
    }
  }
  function firstCapitalLetter(title) {
    return title.charAt(0).toUpperCase() + title.slice(1);
  }
  return (
    <>
      <div id="main">
        <h1>Click on Button to make network request</h1>
        <button onClick={fetchData}>GET POST</button>
      </div>
      <div className="data">
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>User Id</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {data.map((todo, index) => (
              <tr key={index+1}>
                <td>{todo.id}</td>
                <td>{firstCapitalLetter(todo.title)}</td>
                <td>{todo.userId}</td>
                <td className={todo.completed ? "green" : "red"}>
                  {todo.completed ? "Yes" : "No"}
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
