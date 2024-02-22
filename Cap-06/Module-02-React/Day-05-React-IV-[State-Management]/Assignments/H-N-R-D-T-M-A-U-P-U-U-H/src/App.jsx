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
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );

      setData(data);
      setTotalPages(totalPages);
    } catch (error) {
      console.log(error);
    }
  }

  function handlePreviousBtn() {
    setPage((prev) => prev - 1);
  }
  function handleNextBtn() {
    setPage((prev) => prev + 1);
  }
  console.log(totalPages);
  return (
    <>
      <button onClick={handlePreviousBtn} disabled={page === 1}>
        Previous
      </button>
      <button onClick={handleNextBtn} disabled={page === totalPages}>
        Next
      </button>
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
            {data.map((post) => (
              <PostItem key={post.id} {...post} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
