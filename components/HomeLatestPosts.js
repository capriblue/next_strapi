import React, {useEffect, useState} from 'react'
import PostPreview from './PostPreview';

export default function HomeLatestPosts({ posts }) {
    const [latestPosts, setLatestPosts] = useState([]);
    useEffect(() => {
        setLatestPosts(posts.slice(0,5));
    }, [posts]);
    function renderPostPreviews() {
        return latestPosts.map((post) => {
            return <PostPreview post={post.attributes} key={post.id}/>
        })
    }
  return (
      <>
      <h2> home latest posts</h2>
      {renderPostPreviews()}
      </>
    )
}
