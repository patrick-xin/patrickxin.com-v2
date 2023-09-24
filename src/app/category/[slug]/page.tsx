import React from "react";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import Category from "@/components/category";
import MovingHeader from "@/components/nav/moving-header";
import PostItem from "@/app/post/components/item";
import Footer from "@/components/footer";
import { BOOKMARKS } from "@/app/bookmark/data";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import PageWrapper from "@/components/page-wrapper";
import bg from "../../../../public/assets/images/bg-bookmark.jpg";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.category }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const category = Object.keys(BOOKMARKS).find((b) => b === params.slug);
  if (!category) {
    return {};
  }
  return {
    title: `${category} posts`,
    description: `${category} posts`,
    openGraph: {
      title: category,
      description: `${category} posts`,
      type: "article",
      url: absoluteUrl(`/category/${category}}`),
    },
    twitter: {
      card: "summary_large_image",
      title: category,
      description: `${category} posts}`,
      images: [siteConfig.assets.ogImage],
      creator: "@alpesdream",
    },
  };
};

const Page = ({ params }: { params: { slug: string } }) => {
  const posts = allPosts.filter((p) => {
    return p.category === params.slug;
  });

  return (
    <PageWrapper>
      <MovingHeader count={320} />
      <Image
        src={bg}
        fill
        priority
        className="dakr:opacity-5 fixed inset-0 -top-24 -z-10 opacity-20 bg-blend-hue"
        alt="background-image"
      />
      <div className="mx-auto my-4 max-w-4xl md:my-6 lg:mb-24 lg:mt-12">
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
    </PageWrapper>
  );
};

export default Page;
