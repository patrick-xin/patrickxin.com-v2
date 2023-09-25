import type { CommentWithUserAndReply } from "@/types";

import CommentForm from "./form";
import CommentContents from "./content";
import CommentHeading from "./heading";

type PostCommentsProps = {
  slug: string;
  category: string;
  commentsLength: number | undefined;
  comments: CommentWithUserAndReply[];
};

const PostComments = ({
  slug,
  commentsLength,
  comments,
  category,
}: PostCommentsProps) => {
  return (
    <div className="mx-auto my-6 max-w-4xl md:my-12">
      <div className="my-10 space-y-3 md:space-y-4 lg:my-16">
        <CommentHeading text={commentsLength !== 0 ? "Comments" : ""} />
        <CommentContents comments={comments} />
      </div>

      <div className="my-10 space-y-3 md:space-y-4 lg:my-16">
        <CommentHeading text="Questions? Thoughts? Welcome to drop a comment below!" />
        <CommentForm slug={slug} category={category} />
      </div>
    </div>
  );
};

export default PostComments;
