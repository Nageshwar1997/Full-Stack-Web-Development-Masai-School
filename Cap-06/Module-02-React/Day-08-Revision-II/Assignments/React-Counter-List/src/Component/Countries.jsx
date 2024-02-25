import LoadingIndicator from "./LoadingIndicator";

function Countries() {
  return <LoadingIndicator />;

  return (
    <div>
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
        </tbody>
      </table>
      <div>{/* Pagination */}</div>
    </div>
  );
}

export default Countries;
