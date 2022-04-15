import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="navBar">
      <div className="container">
        <Link href="/">
          <a className="title">Devistry</a>
        </Link>
        <ul>
          <li>
            <Link href="/posts">
                <a className="">All posts</a></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
