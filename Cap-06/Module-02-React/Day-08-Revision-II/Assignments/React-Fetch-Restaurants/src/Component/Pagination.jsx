import React from "react";

function Pagination({ currentPage, totalPages, handlePageChange }) {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  return (
    <div data-testid="page-container">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          style={{ borderColor: currentPage === pageNumber ? "red" : "black" }}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
