import React from 'react'
import PostPreview from './PostPreview';

export default function AllPosts({ posts }) {

    function renderPostPreviews() {
        return posts.map((post) => {
            return <PostPreview post={post.attributes} key={post.id} id={post.id}  />
        })
    }
  return (
      <>
      <h2> All posts</h2>
      {renderPostPreviews()}
      </>
    )
}
