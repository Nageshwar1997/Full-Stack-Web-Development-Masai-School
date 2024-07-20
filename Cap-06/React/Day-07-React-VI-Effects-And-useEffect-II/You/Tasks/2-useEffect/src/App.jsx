import { useState, useEffect } from "react";
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
  const [products, setProducts] = useState([]);

  async function fetchAndUpdateData() {
    setLoading(true);
    try {
      let resp = await getData(`https://dummyjson.com/products`);
      let finalResp = await resp.products;
      setProducts(finalResp);
      setLoading(false);
      setError(false);
      // console.log(data);
    } catch (error) {
      setLoading(false);
      setError(true);
      // console.log(error);
    }
  }

  useEffect(function () {
    fetchAndUpdateData();
  },[])

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return (
      <h1>Something went wrong please try again later or refresh the page</h1>
    );
  }

  return (
    <>
      <div id="product-list">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

export default App;
