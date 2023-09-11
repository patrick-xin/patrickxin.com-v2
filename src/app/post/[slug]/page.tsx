import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import PostHeader from "@/app/post/components/header/index";
import ScrollToTop from "@/components/scroll-to-top";
import TocButton from "@/app/post/components/toc/button";
import PostPageWrapper from "@/app/post/components/wrapper";
import TocDrawer from "@/app/post/components/toc/drawer";
import MobileNav from "@/components/nav/mobile-nav";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";
import PostContent from "../components/mdx/body";
import PostPageHeader from "../components/header";
import PostFooter from "../components/footer";
import AdjacentPost from "../components/adjacent";

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
          url: post.thumbnail.url,
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
  const {
    body: { code },
    category,
    thumbnail,
    description,
    readingTime,
    publishedAt,
    title,
    slug,
    tags,
    toc,
  } = post;
  return (
    <>
      <PostPageWrapper>
        <PostPageHeader category={category} title={title} />
        <div className="mx-auto mt-6 max-w-2xl lg:mt-0">
          <PostHeader
            category={category}
            description={description}
            publishedAt={publishedAt}
            readingTime={readingTime}
            slug={slug}
            title={title}
            thumbnail={thumbnail}
          />
          <PostContent code={code} />
          <PostFooter slug={slug} tags={tags} />
          <ScrollToTop isFixed top={1000} />
        </div>
        <AdjacentPost slug={slug} />
      </PostPageWrapper>
      <>
        <TocButton />
        {toc && <TocDrawer />}
        <MobileNav />
      </>
    </>
  );
};

export default BlogPage;
