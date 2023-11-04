import React, { useContext, useState } from "react";
import { PostContext } from "./context/PostContext";

function AddPostForm() {
  const { addPost } = useContext(PostContext);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  const handleOnChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(newPost);
    setNewPost({ title: "", body: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        name="title"
        value={newPost.title}
        onChange={handleOnChange}
      ></input>
      <input
        type="text"
        placeholder="body"
        name="body"
        value={newPost.body}
        onChange={handleOnChange}
      ></input>
      <button>Add post</button>
    </form>
  );
}

export default AddPostForm;
