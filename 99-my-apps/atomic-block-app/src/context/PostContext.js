import { createContext, useContext } from "react";
import { createRandomPost } from "../util/createRandomPost";
import { useState } from "react";
import { SearchContext } from "./SearchContext";

const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  const { search } = useContext(SearchContext);

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    search.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(search.toLowerCase())
        )
      : posts;

  function addPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function clearPosts() {
    setPosts([]);
  }

  return (
    // 2) PROVIDE VALUE TO CHILD COMPONENTS
    <PostContext.Provider value={{ posts, addPost, clearPosts, searchedPosts }}>
      {children}
    </PostContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export { PostProvider, PostContext, usePosts };
