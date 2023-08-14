import { compareDesc } from "date-fns";
import Link from "next/link";
import React from "react";
import { allPosts } from "contentlayer/generated";

const AllBlogsPage = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );

  return (
    <div className="container mx-auto max-w-5xl">
      {posts.map((post, idx) => (
        <div key={idx}>
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default AllBlogsPage;
