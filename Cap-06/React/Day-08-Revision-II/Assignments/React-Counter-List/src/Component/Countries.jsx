import { useState, useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";
import CountriesCard from "./CountriesRow";
import styles from "./Countries.module.css";
function Countries() {
  const [countries, setCountries] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  async function fetchCountries() {
    setLoading(true);

    try {
      let resp = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${currentPage}&limit=10&orderBy=desc`
      );
      let data = await resp.json();
      // console.log(data.data); // it will give me the data
      let finalData = data.data;
      let totalPages = data.totalPages;
      setCountries(finalData);
      setTotalPages(totalPages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching countries:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCountries();
  }, [currentPage]);

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  if (Loading) {
    return <LoadingIndicator />;
  }
  return (
    <div id={styles.container}>
      <h1 data-testid="countries-header">Countries List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>COUNTRY</th>
            <th>POPULATION</th>
            <th>RANK</th>
          </tr>
        </thead>
        <tbody data-testid="countries-container">
          {/* Show the CountriesRow here  */}

          {countries.map((country) => (
            <CountriesCard key={country.id} {...country} />
          ))}
        </tbody>
      </table>
      <div id={styles.pagination}>
        {/* Pagination */}
        <Pagination
          current={currentPage}
          onChange={handlePageChange}
          total={totalPages}
        />
      </div>
    </div>
  );
}

export default Countries;
