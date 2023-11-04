import React, { useContext } from "react";
import PostItem from "./PostItem";
import { PostContext } from "./context/PostContext";

function PostList() {
  const { searchedPosts } = useContext(PostContext);
  return (
    <section>
      <ul>
        {searchedPosts.map((post, i) => (
          <PostItem post={post} key={i} />
        ))}
      </ul>
    </section>
  );
}

export default PostList;
