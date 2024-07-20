import React from "react";
import RestaurantCard from "./RestaurantCard";
import Pagination from "./Pagination";
function Restaurants({ restaurants, loading, currentPage, totalPages, handlePageChange }) {
  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <h1 data-testid="restaurants-header">Restaurants List</h1>
      <div data-testid="restaurants-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            type={restaurant.type}
            image={restaurant.image}
            rating={restaurant.rating}
            number_of_votes={restaurant.number_of_votes}
            price_starts_from={restaurant.price_starts_from}
          />
        ))}
      </div>
      <div>
        <Pagination
          total={totalPages}
          current={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Restaurants;
