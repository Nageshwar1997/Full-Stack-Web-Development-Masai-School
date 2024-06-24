// Step 1: import useEffect
import { useState, useEffect } from "react";
import "./App.css";
import PostItem from "./Components/PostItem";

async function getData(url) {
  try {
    let resp = await fetch(url);
    let data = await resp.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  console.log(1); // Order of execution --> 1
  async function fetchAndUpdateData() {
    setLoading(true);
    try {
      let data = await getData(
        `http://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      setPosts(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  // Step 2 : call useEffect and pass callback function inside it;
  useEffect(() => {
    console.log(2); // Order of execution --> 4
    fetchAndUpdateData();
  }, [page]);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return (
      <h1>Something went wrong... Please Refresh the page Or Try Again</h1>
    );
  }

  console.log(3); // Order of execution --> 2
  return (
    // Order of execution --> 3
    <>
      <div>
        <h1>Get posts as soon as the component renders</h1>
        <h1>{page}</h1>
        <button onClick={() => setPage(page - 1)}>Prev Page</button>
        <button onClick={() => setPage(page + 1)}>Next Page</button>
        {posts.map((post) => (
          <PostItem
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </>
  );
}

export default App;
