import { compareDesc } from "date-fns";
import React from "react";
import { allPosts } from "contentlayer/generated";
import PostList from "@/app/post/components/list";
import Category from "@/components/category";
import PageHeader from "@/components/page-header";

const AllBlogsPage = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );

  return (
    <div className="container mx-auto max-w-3xl">
      <Category />
      <PageHeader titleInfo="I write things about" titleInfoMain="React" />

      <PostList posts={posts} />
    </div>
  );
};

export default AllBlogsPage;
