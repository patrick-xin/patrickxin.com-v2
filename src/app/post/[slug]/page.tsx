import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import PostHeader from "@/app/post/[slug]/components/header";
import PostFooter from "@/app/post/[slug]/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import TocButton from "@/app/post/[slug]/components/toc/button";
import PostPageWrapper from "@/app/post/[slug]/components/wrapper";
import TocDrawer from "@/app/post/[slug]/components/toc/drawer";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import PostContent from "./components/body";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  if (!post) {
    return {};
  }
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: siteConfig.assets.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [siteConfig.assets.ogImage],
      creator: "@alpesdream",
    },
  };
};

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

  if (!post) notFound();

  return (
    <section>
      <TocDrawer />
      <PostPageWrapper>
        <div className="mx-auto max-w-3xl">
          <PostHeader {...post} />
          <PostContent code={post.body.code} />
          <PostFooter slug={params.slug} tags={post.tags} />
          <ScrollToTop isFixed top={1000} />
        </div>
      </PostPageWrapper>
      <TocButton />
    </section>
  );
};

export default BlogPage;
