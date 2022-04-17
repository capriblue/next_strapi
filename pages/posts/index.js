import React from 'react'
import axios from 'axios';
import AllPosts from '../components/AllPosts';
export default function Posts({ posts }) {
  return (
    <div>
    <AllPosts posts={posts}/>
  </div>
  )
}

export async function getStaticProps() {
  const postsRes = await axios.get("http://localhost:1337/api/posts");

  return {
    props: {
      posts: postsRes.data.data,
    },
  };
}
