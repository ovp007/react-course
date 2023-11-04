import React from "react";

function PostItem({ post }) {
  return (
    <li>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </li>
  );
}

export default PostItem;
