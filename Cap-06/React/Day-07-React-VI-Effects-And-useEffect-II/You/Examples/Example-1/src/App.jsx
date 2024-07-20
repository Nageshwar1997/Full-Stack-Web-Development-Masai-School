import { useEffect, useState } from "react";
import "./App.css";
import LoadingIndicator from "./components/LoadingIndicator";
import ErrorIndicator from "./components/ErrorIndicator";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchAndUpdateData = async (page) => {
    try {
      setLoading(true);
      let resp = await fetch(
        `http://localhost:3000/todos?_limit=10&_page=${page}`
      );
      let respData = await resp.json();

      setLoading(false);
      setError(false);
      setData(respData);
      setTotalPages(Math.ceil(+resp.headers.get("X-Total-Count") / 10));
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAndUpdateData(page);
  }, [page]);

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorIndicator />;

  const renderPageNumbers = () => {
    const maxPagesToShow = 3;

    let startPage = Math.max(2, page - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages - 1, startPage + maxPagesToShow - 1);

    if (endPage > totalPages - 1) {
      endPage = totalPages - 1;
      startPage = Math.max(2, endPage - maxPagesToShow + 1);
    }

    const pageNumbers = [];
    if (startPage > 2) {
      pageNumbers.push(<span key="startEllipsis">. . .</span>);
    }
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          onClick={() => setPage(i)}
          disabled={i === page}
          key={i}
          style={{
            backgroundColor: i === page && "lightblue",
            color: i === page ? "white" : "black",
          }}
        >
          {i < 10 ? `0${i}` : i}
        </button>
      );
    }
    if (endPage < totalPages - 1) {
      pageNumbers.push(<span key="endEllipsis">. . .</span>);
    }
    return pageNumbers;
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          {"<"}
        </button>
        <button
          disabled={page === 1}
          onClick={() => (page >= 3 ? setPage(page - 3) : setPage(1))}
        >
          {"<<"}
        </button>
        <button
          onClick={() => setPage(1)}
          disabled={page === 1}
          style={{
            backgroundColor: page === 1 && "lightblue",
            color: page === 1 ? "white" : "black",
          }}
        >
          01
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => setPage(totalPages)}
          disabled={page === totalPages}
          style={{
            backgroundColor: page === totalPages && "lightblue",
            color: page === totalPages ? "white" : "black",
          }}
        >
          {totalPages < 10 ? `0${totalPages}` : totalPages}
        </button>
        <button
          disabled={page === totalPages}
          onClick={() =>
            page <= totalPages - 3 ? setPage(page + 3) : setPage(totalPages)
          }
        >
          {">>"}
        </button>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          {">"}
        </button>
      </div>
      <div>
        {data.map((todo) => (
          <div
            key={todo.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h2>{todo.id}</h2>
            <h3 style={{ textTransform: "capitalize" }}>{todo.title}</h3>
            <h5
              style={{
                textTransform: "capitalize",
                color: todo.completed ? "green" : "red",
              }}
            >
              {todo.completed ? "completed" : "not completed"}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
