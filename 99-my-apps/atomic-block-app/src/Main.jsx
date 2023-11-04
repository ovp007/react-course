import React from "react";
import AddPostForm from "./AddPostForm";
import PostList from "./PostList";
import Archive from "./Archive";

function Main() {
  return (
    <main>
      <AddPostForm />
      <PostList />
      <Archive />
    </main>
  );
}

export default Main;
