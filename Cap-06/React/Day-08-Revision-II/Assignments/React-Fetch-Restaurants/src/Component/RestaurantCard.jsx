function RestaurantCard({
  name,
  image,
  type,
  rating,
  price_starts_from,
  number_of_votes,
}) {
  return (
    <div data-testid="restaurant-card">
      {/* display the props */}
      <img src={image} alt={name} data-testid="restaurant-card-image" />
      <p data-testid="restaurant-card-name">Name : {name}</p>
      <p>
        Type: <span data-testid="restaurant-card-type">{type}</span>
      </p>
      <p>
        Rating: <span data-testid="restaurant-card-rating">{rating}</span>
      </p>
      <p>
        Votes:{" "}
        <span data-testid="restaurant-card-votes">{number_of_votes}</span>
      </p>
      <p>
        Price starts from:{" "}
        <span data-testid="restaurant-card-price">{price_starts_from}</span>
      </p>
    </div>
  );
}

export default RestaurantCard;
