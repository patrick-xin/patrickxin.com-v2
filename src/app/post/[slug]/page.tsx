import { notFound } from "next/navigation";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";

import PostHeader from "@/components/post/header/index";
import ScrollToTop from "@/components/scroll-to-top";
import TocButton from "@/components/post/toc/button";
import PostPageWrapper from "@/components/post/wrapper";
import TocDrawer from "@/components/post/toc/drawer";
import MobileNav from "@/components/nav/mobile-nav";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import MessageModal from "@/components/message-modal";
import PostPageHeader from "@/components/post/header";
import PostContent from "@/components/post/mdx/body";
import PostFooter from "@/components/post/footer";
import AdjacentPost from "@/components/post/adjacent";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));

export const generateMetadata = ({
  params,
}: {
  params: { category: string; slug: string };
}) => {
  const post = allPosts.find(
    (p) => p.category === params.category && p.slug === params.slug,
  );
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
      url: absoluteUrl(`${post.category}/${post.slug}`),
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

const BlogPage = async ({
  params,
}: {
  params: { category: string; slug: string };
}) => {
  const post = allPosts.find((p) => p.slug === params.slug);

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
    image,
  } = post;

  return (
    <>
      <PostPageWrapper>
        <PostPageHeader category={category} title={title} />
        <div className="mx-auto mt-6 max-w-2xl lg:mt-0">
          <div className="fixed inset-0 -z-10 h-full min-h-screen w-full opacity-10">
            <Image
              src={image}
              priority
              fill
              className="h-full bg-blend-multiply"
              alt="bg-image"
            />
          </div>
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
        <MobileNav slug={slug} />
        <MessageModal />
      </>
    </>
  );
};

export default BlogPage;
