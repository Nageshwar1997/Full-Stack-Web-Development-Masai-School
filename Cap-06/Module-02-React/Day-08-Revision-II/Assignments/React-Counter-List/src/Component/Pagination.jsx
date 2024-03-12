function Pagination(props) {
  const { current, onChange, total } = props;
  function handlePrevClick() {
    if (current > 1) {
      onChange(current - 1);
    }
  }

  function handleNextClick() {
    if (current < total) {
      onChange(current + 1);
    }
  }
  const prev = (
    <button
      data-testid="prev-page"
      disabled={current === 1}
      onClick={handlePrevClick}
    >
      Prev
    </button>
  );
  const currentPage = <button data-testid="current-page">{current}</button>;
  const next = (
    <button
      data-testid="next-page"
      disabled={current === total}
      onClick={handleNextClick}
    >
      Next
    </button>
  );
  return (
    <div data-testid="page-container">
      <div>
        {prev}
        {currentPage}
        {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">{total}</b>
      </div>
    </div>
  );
}

export default Pagination;
