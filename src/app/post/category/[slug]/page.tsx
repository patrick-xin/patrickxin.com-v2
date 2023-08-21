import React from "react";
import { allPosts } from "contentlayer/generated";
import PostList from "@/app/post/components/list";
import Category from "@/components/category";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.category }));

const Page = ({ params }: { params: { slug: string } }) => {
  const posts = allPosts.filter((p) => {
    return p.category === params.slug;
  });

  return (
    <div className="container mx-auto max-w-3xl">
      <Category />
      <PostList posts={posts} />
    </div>
  );
};

export default Page;
