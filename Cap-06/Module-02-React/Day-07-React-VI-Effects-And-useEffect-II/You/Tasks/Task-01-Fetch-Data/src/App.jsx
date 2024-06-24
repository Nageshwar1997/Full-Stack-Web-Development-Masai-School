import { useState } from "react";
import "./App.css";
import Product from "./Components/Product";

const getData = async (url) => {
  try {
    let resp = await fetch(url);
    let data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  async function fetchAndUpdateData() {
    setLoading(true);
    try {
      let resp = await getData(`https://dummyjson.com/products`);
      let data = await resp.products;
      setData(data);
      setLoading(false);
      setError(false);
      // console.log(data);
    } catch (error) {
      setLoading(false);
      setError(true);
      // console.log(error);
    }
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if(error){
    return <h1>Something went wrong please try again later or refresh the page</h1>
}

  return (
    <>
      <button onClick={() => fetchAndUpdateData()}>Get All Products</button>
      <div id="product-list">
        {data.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

export default App;
