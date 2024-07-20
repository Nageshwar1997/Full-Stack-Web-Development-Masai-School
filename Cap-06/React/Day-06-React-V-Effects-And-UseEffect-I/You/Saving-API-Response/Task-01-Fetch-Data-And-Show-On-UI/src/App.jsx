import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  async function fetchData() {
    try {
      let resp = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=5`
      );

      let finalData = await resp.json();
      setData(finalData);
      // console.log(finalData);
    } catch (error) {
      // console.log(error);
      return error;
    }
  }

  return (
    <>
      <div>
        <p>
          Clicking on this button should fetch the data from JSON placeholder
          API <a href="https://jsonplaceholder.typicode.com/posts?_limit=5">URL</a>
        </p>
        <button onClick={fetchData}>Get and Display Post</button>
        {data.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
              textAlign: "left",
            }}
          >
            <p>
              <strong>ID : </strong>
              {post.id}
            </p>
            <p>
              <strong>Title : </strong>
              {post.title}
            </p>
            <p>
              <strong>User ID : </strong>
              {post.userId}
            </p>
            <p>
              <strong>Body : </strong>
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
