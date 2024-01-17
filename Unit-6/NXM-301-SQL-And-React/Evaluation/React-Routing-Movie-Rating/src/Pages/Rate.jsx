import React from "react";

const Rate = () => {
  return (
    <div>
      <select data-test-id="rate-select">
        <option value="0">Select rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button data-test-id="rate-confirm">Rate</button>
    </div>
  );
};

export default Rate;
