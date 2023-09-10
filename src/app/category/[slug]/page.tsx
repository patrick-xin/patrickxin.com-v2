import React from "react";
import { allPosts } from "contentlayer/generated";
import Category from "@/components/category";
import MovingHeader from "@/components/nav/moving-header";
import PostItem from "@/app/post/components/item";
import Footer from "@/components/footer";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.category }));

const Page = ({ params }: { params: { slug: string } }) => {
  const posts = allPosts.filter((p) => {
    return p.category === params.slug;
  });

  return (
    <>
      <MovingHeader count={320} />

      <div className="mx-auto my-4 max-w-5xl md:my-6 lg:mb-24 lg:mt-12">
        <Category />
        <section className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-8 lg:gap-12">
          {posts.map((post, index) => (
            <PostItem
              key={post.slug}
              post={post}
              noBorder={
                (posts.length % 2 === 1 && index === posts.length - 1) ||
                (posts.length % 2 === 0 &&
                  (index === posts.length - 1 || index === posts.length - 2))
              }
            />
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Page;
