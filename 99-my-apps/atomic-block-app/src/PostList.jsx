import React from "react";
import PostItem from "./PostItem";

function PostList({ posts }) {
  return (
    <section>
      <ul>
        {posts.map((post, i) => (
          <PostItem post={post} key={i} />
        ))}
      </ul>
    </section>
  );
}

export default PostList;
