import React from "react";

export default function PostPreview({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </div>
  );
}
