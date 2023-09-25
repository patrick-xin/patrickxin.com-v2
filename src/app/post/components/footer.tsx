"use client";

import Tags from "./tags";
import PostComments from "./comment";
import { usePostComments } from "../hooks";

type PostFooterProps = { slug: string; tags: string[]; category: string };

const PostFooter = ({ slug, tags, category }: PostFooterProps) => {
  const { comments, commentsCount } = usePostComments(slug);
  return (
    <section className="scroll-mt-24">
      <Tags tags={tags} />
      {comments && (
        <PostComments
          category={category}
          comments={comments}
          commentsLength={commentsCount}
          slug={slug}
        />
      )}
    </section>
  );
};

export default PostFooter;
