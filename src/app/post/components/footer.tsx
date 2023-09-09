"use client";

import Tags from "./tags";
import PostComments from "./comment";
import { usePostComments } from "../hooks";

type PostFooterProps = { slug: string; tags: string[] };

const PostFooter = ({ slug, tags }: PostFooterProps) => {
  const { comments, commentsCount } = usePostComments(slug);
  return (
    <section className="scroll-mt-24">
      <Tags tags={tags} />
      {comments && (
        <PostComments
          comments={comments}
          commentsLength={commentsCount}
          slug={slug}
        />
      )}
    </section>
  );
};

export default PostFooter;
