import React, { useState } from "react";
import { createRandomPost } from "./util/createRandomPost";

function Archive() {
  const [archivePost] = useState(
    Array.from({ length: 10000 }, () => createRandomPost())
  );
  const [showArchive, setShowArchive] = useState(false);
  return (
    <aside>
      <h2>Archive</h2>
      <button onClick={() => setShowArchive((prev) => !prev)}>
        {!showArchive ? "Show Archive" : "Hide Archive"}
      </button>
      {showArchive && (
        <ul>
          {archivePost.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              {/* <button onClick={() => onAddPost(post)}>Add as new post</button> */}
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default Archive;
