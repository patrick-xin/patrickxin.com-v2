import CommentForm from "./comment-form";
import CommentContents from "./content";
import CommentHeading from "./heading";

type PostCommentsProps = {
  slug: string;
};

const PostComments = ({ slug }: PostCommentsProps) => {
  return (
    <div className="mx-auto my-6 max-w-4xl md:my-12">
      <div className="my-10 space-y-3 md:space-y-4 lg:my-16">
        <CommentHeading text="Comments" />
        <CommentContents slug={slug} />
      </div>

      <div className="my-10 space-y-3 md:space-y-4 lg:my-16">
        <CommentHeading text="Questions? Thoughts? Welcome to drop a comment below!" />
        <CommentForm slug={slug} />
      </div>
    </div>
  );
};

export default PostComments;
