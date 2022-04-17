import React from "react";
import Link from "next/dist/client/link";
export default function PostPreview({ post }) {
  return (
    <Link href={`posts/${post.title}`}>
      <div className="postPreview">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>
    </Link>
  );
}
