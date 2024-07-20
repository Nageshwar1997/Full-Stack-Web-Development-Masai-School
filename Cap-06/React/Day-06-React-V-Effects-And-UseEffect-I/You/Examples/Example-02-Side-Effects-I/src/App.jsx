import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  async function fetchData() {
    try {
      let resp = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );

      let finalData = await resp.json();
      setData(finalData);
      setTotalPages(Math.ceil(Number(resp.headers.get("X-Total-Count")) / 10));
      console.log("Total Pages : ", totalPages);
      // console.log(finalData);
    } catch (error) {
      // console.log(error);
      return error;
    }
  }

  // console.log(1);
  useEffect(() => {
    // console.log(2);
    fetchData();
  }, [page]); // page is dependency of useEffect function to run fetchData
  // console.log(3);
  return (
    <>
      <div>
        <div>
          <h1>Page No : {page}</h1>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <button
              disabled={page <= 1}
              onClick={() => (page <= 1 ? setPage(1) : setPage(page - 1))}
            >
              Previous Page
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setPage(index + 1)}
                style={{
                  fontWeight: page === index + 1 ? "bold" : "normal",
                }}
              >
                {index + 1}
              </button>
            ))}
            <button
              disabled={page >= totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next Page
            </button>
          </div>
        </div>

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
