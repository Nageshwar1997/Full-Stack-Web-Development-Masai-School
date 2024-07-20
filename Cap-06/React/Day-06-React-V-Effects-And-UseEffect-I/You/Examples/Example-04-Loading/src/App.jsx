import { useState } from "react";
import "./App.css";
import PostItem from "./Components/PostItem";

const getData = async (url) => {
  try {
    let resp = await fetch(url);
    let data = await resp.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    setLoading(true);
    try {
      let data = await getData(
        "http://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      setPosts(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong... Please Refresh the page</h1>;
  }

  return (
    <>
      <div>
        <h1>Click on the below button to get posts</h1>
        <button onClick={fetchAndUpdateData}>Get Posts</button>
        {posts.length > 0 &&
          posts.map((post) => (
            <PostItem key={post.id} id={post.id} title={post.title} />
          ))}
      </div>
    </>
  );
}

export default App;
