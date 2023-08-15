import CommentForm from "./comment-form";

type PostFooterProps = { slug: string };

const PostFooter = ({ slug }: PostFooterProps) => {
  return (
    <div className="scroll-mt-24 space-y-6 md:space-y-8">
      <div
        id={`${slug}-comment`}
        className="font-heading text-xl tracking-wider md:text-2xl lg:text-3xl"
      >
        Comments
      </div>
      <CommentForm />
    </div>
  );
};

export default PostFooter;
