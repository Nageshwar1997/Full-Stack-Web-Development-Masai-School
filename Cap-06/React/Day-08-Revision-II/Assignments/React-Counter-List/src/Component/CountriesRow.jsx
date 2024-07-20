function CountriesCard(props) {
  // console.log(props);
  const { id, country, population, Rank } = props;
  return (
    <tr data-testid="country-card">
      <td>{id}</td>
      <td data-testid="country-card-name">{country}</td>
      <td data-testid="country-card-population">{population}</td>
      <td>{Rank}</td>
    </tr>
  );
}

export default CountriesCard;
