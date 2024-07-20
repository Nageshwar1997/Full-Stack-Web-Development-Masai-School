import { useState } from "react";
import DataDisplay from "./Component/DataDisplay";
import "./App.css";

async function fetchData(apiUrl) {
  try {
    let resp = await fetch(apiUrl);
    let data = await resp.json();
    return data;
  } catch (error) {
    // console.log(error);
    throw new Error(error);
  }
}
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchAndUpdateData() {
    setIsLoading(true);
    try {
      let data = await fetchData(`https://jsonplaceholder.typicode.com/posts`);
      let finalData = data;
      // console.log(finalData);
      setData(finalData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(true);
      // console.log(error);
    }
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Something went wrong</h1>;
  }
  // fetchAndUpdateData();
  return (
    <>
      <button onClick={fetchAndUpdateData}>Display Data</button>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>User Id</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <DataDisplay key={post.id} data={post} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
