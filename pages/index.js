import axios from "axios";
import React from "react";
import HomeHeader from "../components/HomeHeader";
import HomeLatestPosts from "../components/HomeLatestPosts";

export default function Home({ posts, isdev }) {
  return (
    <div>
      <HomeHeader/>
      <HomeLatestPosts posts={posts}/>
    </div>
  );
}
// export async function getServerSideProps() {
export async function getStaticProps() {
  const postsRes = await axios.get("http://localhost:1337/api/posts");

  return {
    props: {
      posts: postsRes.data.data,
    },
  };
}

