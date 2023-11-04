import React, { useContext } from "react";
import { PostContext } from "./context/PostContext";

function SearchResult() {
  const { searchedPosts } = useContext(PostContext);
  return <div>{searchedPosts ? searchedPosts.length : 0} Results</div>;
}

export default SearchResult;
