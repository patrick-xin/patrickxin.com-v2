import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostItem from "./item";

const PostList = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );

  return (
    <section className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-8 lg:gap-12">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </section>
  );
};

export default PostList;
