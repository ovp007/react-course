import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Archive from "./Archive";
import AddPostForm from "./AddPostForm";
import { faker } from "@faker-js/faker";
import PostList from "./PostList";
import Main from "./Main";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function AtomicBlog() {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  return (
    <>
      <Header />
      <Main posts={posts} />
      <Archive />
      <Footer />
    </>
  );
}

export default AtomicBlog;
