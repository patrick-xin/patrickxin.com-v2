import { compareDesc } from "date-fns";
import React from "react";
import { allPosts } from "contentlayer/generated";
import PageHeader from "@/components/page-header";
import PostList from "@/components/posts/list";

const AllBlogsPage = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );

  return (
    <div className="container mx-auto max-w-3xl">
      <PageHeader titleInfo="I write things about" titleInfoMain="React" />
      <PostList posts={posts} />
    </div>
  );
};

export default AllBlogsPage;
