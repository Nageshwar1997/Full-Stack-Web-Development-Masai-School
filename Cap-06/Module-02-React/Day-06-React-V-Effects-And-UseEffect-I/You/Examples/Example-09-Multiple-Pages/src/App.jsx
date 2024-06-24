import { useState, useEffect } from "react";
import PostItem from "./Components/PostItem";
import "./App.css";

async function getData(url) {
  try {
    let resp = await fetch(url);
    let data = await resp.json();
    let totalCount = +resp.headers.get("X-Total-Count");
    let totalPages = Math.ceil(totalCount / 10);
    // console.log(totalCount);
    // console.log(totalPages);
    return {
      data: data,
      totalPages: totalPages,
    };
  } catch (error) {
    console.log(error);
  }
}
function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchAndUpdateData(page);
  }, [page]);

  async function fetchAndUpdateData() {
    try {
      let { data, totalPages } = await getData(
        `https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`
      );

      setData(data);
      setTotalPages(totalPages);
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(totalPages);
  return (
    <>
      <div>
        <h1>ToDo_s</h1>
        <div id="buttons">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            {" << "}
          </button>
          {new Array(totalPages).fill(0).map((_, index) => {
            return (
              <button key={index} onClick={() => setPage(index + 1)} className={page === index + 1 ? "activeButton" : ""}>
                {index + 1}
              </button>
            );
          })}
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            {" >> "}
          </button>
        </div>
      </div>
      <div id="table">
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>User Id</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {data.map((todo) => (
              <tr key={todo.id}>
                <PostItem {...todo} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
