import PostComments from "./comment";
import Tags from "./tags";

type PostFooterProps = { slug: string; tags: string[] };

const PostFooter = async ({ slug, tags }: PostFooterProps) => {
  return (
    <section className="scroll-mt-24">
      <Tags tags={tags} />

      <PostComments slug={slug} />
    </section>
  );
};

export default PostFooter;
