import React, { useContext } from "react";
import { SearchContext } from "./context/SearchContext";

function SearchBar() {
  const { search, setSearch } = useContext(SearchContext);
  return (
    <input
      type="text"
      placeholder="search post"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    ></input>
  );
}

export default SearchBar;
