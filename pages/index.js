import axios from "axios";
import React from "react";

export default function Home({ posts }) {
  return (
    <div>
      <h1>{posts[0].attributes.title}</h1>
      <h1>{posts[1].attributes.title}</h1>
    </div>
  );
}

export async function getStaticProps() {
  const postsRes = await axios.get("http://localhost:1337/api/posts");

  return {
    props: {
      posts: postsRes.data.data,
    },
  };
}
