import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import PostHeader from "@/components/post/header";
import PostContent from "@/components/post/body";
import PostFooter from "@/components/post/footer";
import ScrollToTop from "@/components/scroll-to-top";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const BlogPage = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

  if (!post) notFound();

  return (
    <section className="mx-auto max-w-3xl">
      <PostHeader {...post} />
      <PostContent code={post.body.code} />
      <PostFooter slug={params.slug} />
      <ScrollToTop isFixed top={1000} />
    </section>
  );
};

export default BlogPage;
