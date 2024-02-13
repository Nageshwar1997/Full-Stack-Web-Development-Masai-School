import { useState, useEffect } from "react";
import "./App.css";
import PostItem from "./Components/PostItem";

const getData = async (url) => {
  try {
    let resp = await fetch(url);
    let data = await resp.json();
    // let totalPages = resp.headers.get()
    // console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  

  async function fetchAndUpdateData() {
    setLoading(true);
    try {
      let data = await getData(`http://localhost:8080/todos`);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(
    function () {
      fetchAndUpdateData();
    },
    []
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong... Please Refresh the page</h1>;
  }

  return (
    <>
      <div>
        <h1>Show Data</h1>
        <div style={{display:"grid", gridTemplateColumns: "repeat(4, 1fr)"}}>
          {data.map((item) => (
            <PostItem
              key={item.id}
              id={item.id}
              title={item.title}
              completed={item.completed}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
