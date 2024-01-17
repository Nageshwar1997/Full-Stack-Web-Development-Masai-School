import React from "react";

function Card({ name, genere, actor, language, pics, averageReview, id }) {
  return (
    <div
      data-test-id="movie-card"
      className="bg-white rounded-md shadow-md overflow-hidden"
    >
      {/* Show the Movie Data here  */}
    </div>
  );
}

export default Card;
