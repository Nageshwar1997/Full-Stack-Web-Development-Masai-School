import React, { useState } from "react";
import "./App.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by error boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong. Please try again later.</p>;
    }

    return this.props.children;
  }
}

function App() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  return (
    <ErrorBoundary>
      <>
        <button onClick={getAllProducts}>GET ALL Products</button>
        <div className="products-container">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.images[0]} alt={`Product ${index + 1}`} />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </>
    </ErrorBoundary>
  );
}

export default App;
