import React from "react";
import Link from "next/link"
export default function PostPreview({ post, id }) {
  return (
    <Link href={`posts/${id}`}>
      <div className="postPreview">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>
    </Link>
  );
}
