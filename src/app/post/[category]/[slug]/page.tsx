import { notFound } from "next/navigation";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";

import PostHeader from "@/app/post/components/header/index";
import ScrollToTop from "@/components/scroll-to-top";
import TocButton from "@/app/post/components/toc/button";
import PostPageWrapper from "@/app/post/components/wrapper";
import TocDrawer from "@/app/post/components/toc/drawer";
import MobileNav from "@/components/nav/mobile-nav";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import MessageModal from "@/components/message-modal";
import PostContent from "../../components/mdx/body";
import PostPageHeader from "../../components/header";
import PostFooter from "../../components/footer";
import AdjacentPost from "../../components/adjacent";

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
          <PostFooter slug={slug} tags={tags} category={category} />
          <ScrollToTop isFixed top={1000} />
        </div>
        <AdjacentPost slug={slug} />
      </PostPageWrapper>
      <>
        <TocButton />
        {toc && <TocDrawer />}
        <MobileNav />
        <MessageModal />
      </>
    </>
  );
};

export default BlogPage;
