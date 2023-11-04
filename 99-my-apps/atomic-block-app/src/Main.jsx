import React from "react";
import AddPostForm from "./AddPostForm";
import PostList from "./PostList";

function Main({ posts }) {
  return (
    <main>
      <AddPostForm />
      <PostList posts={posts} />
    </main>
  );
}

export default Main;
