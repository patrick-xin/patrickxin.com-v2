import React from "react";
import { allPosts } from "contentlayer/generated";
import Category from "@/components/category";
import MovingHeader from "@/components/nav/moving-header";
import PostItem from "@/app/post/components/item";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.category }));

const Page = ({ params }: { params: { slug: string } }) => {
  const posts = allPosts.filter((p) => {
    return p.category === params.slug;
  });

  return (
    <>
      <MovingHeader count={320} />

      <div className="mx-auto my-4 max-w-4xl md:my-6">
        <Category />
        <section className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-8 lg:gap-12">
          {posts.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Page;
