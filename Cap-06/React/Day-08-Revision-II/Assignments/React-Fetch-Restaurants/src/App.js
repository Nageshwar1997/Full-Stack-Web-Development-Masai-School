import React, { useEffect, useState } from "react";
import LoadingIndicator from "./Component/LoadingIndicator";
import Pagination from "./Component/Pagination";
import Restaurants from "./Component/Restaurants";

import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchRestaurants = async () => {
    setLoading(true);
    try {
      let resp = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${currentPage}`);
      let data = await resp.json();
      let finalData = data.data;
      setRestaurents(finalData);
      // console.log(finalData);
      setTotalPages(data.totalPages);
      // console.log(data.totalPages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setLoading(false);
    }
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }
  useEffect(() => {
    fetchRestaurants();
  }, [currentPage])

  return (<div className="App">
    {/* <h1>Restaurants</h1> */}
    {loading ? (<LoadingIndicator />) : (
      <>
        <Restaurants restaurants={restaurants} loading={loading} currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
        <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
      </>
    )}
  </div>);
}
