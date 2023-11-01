import React from "react";

function SearchSummary({ totalResults }) {
  return (
    <p className="num-results">
      Found <strong>{totalResults}</strong> results
    </p>
  );
}

export default SearchSummary;
