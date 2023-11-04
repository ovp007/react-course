import React from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

function Header() {
  return (
    <header>
      <h1>Atomic blog</h1>
      <SearchResult />
      <SearchBar />
      <button>Clear Posts</button>
    </header>
  );
}

export default Header;
