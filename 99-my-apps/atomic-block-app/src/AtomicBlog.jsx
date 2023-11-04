import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { PostProvider } from "./context/PostContext";
import { SearchContextProvider } from "./context/SearchContext";

function AtomicBlog() {
  return (
    <SearchContextProvider>
      <PostProvider>
        <Header />
        <Main />
        <Footer />
      </PostProvider>
    </SearchContextProvider>
  );
}

export default AtomicBlog;
