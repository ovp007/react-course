import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import { PostContext } from "./context/PostContext";

function Header() {
  const { clearPosts } = useContext(PostContext);
  return (
    <header>
      <h1>Atomic blog</h1>
      <SearchResult />
      <SearchBar />
      <button onClick={clearPosts}>Clear Posts</button>
    </header>
  );
}

export default Header;
