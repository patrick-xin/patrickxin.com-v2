import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "contentlayer/generated";

import PostHeader from "@/components/post/header";
import MDXComponents from "@/components/post/mdx-component";

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
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <section className="mx-auto max-w-2xl py-8">
      <PostHeader {...post} />
      <article>
        <MDXContent components={MDXComponents} />
      </article>
    </section>
  );
};

export default BlogPage;
