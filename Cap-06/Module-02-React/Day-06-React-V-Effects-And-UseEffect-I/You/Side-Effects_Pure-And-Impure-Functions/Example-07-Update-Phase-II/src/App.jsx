import { useState, useEffect } from "react";
import PostItem from "./Components/PostItem";

const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    // Step 2 : get the total count value from API response headers and return from this function
    let totalCount = +res.headers.get("x-total-count");
    return {
      data,
      totalCount,
    };
  } catch (error) {
    throw new Error(error);
  }
};

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState(false);
  const [page, setPage] = useState(1);
  // Step 1: Added totalPages state and this needs to be updated accordingly with the value from API responses;
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    document.title = "Get posts on mount phase and Update posts whenever page number changes";
    fetchAndUpdateData(page);
  }, [page]);

  const fetchAndUpdateData = async () => {
    setLoading(true);
    try {
      let response = await getData(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      setPosts(response.data);
      // Step 3 : Set total page state value by proper logic
      setTotalPages(Math.ceil(response.totalCount / 10));
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>Something went wrong.. please refresh</h1>;
  }

  return (
    <>
      <h1>
        Get posts on mount phase and Update posts whenever page number changes
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Step 4 : disable the button accordingly based on page number */}
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREVIOUS
        </button>
        {/* <p style={{ padding: "20px", fontWeight: "bolder" }}>{page}</p> */}
        {new Array(totalPages).fill(0).map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            style={{
              backgroundColor: page === index + 1 ? "black" : "white",
              color: page === index + 1 ? "white" : "black",
              margin: "5px",
            }}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          NEXT
        </button>
      </div>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </>
  );
}

export default App;
