import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostItem from "./item";

const PostList = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );

  return (
    <section className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-8 lg:gap-12">
      {posts.map((post, index) => (
        <PostItem
          key={post.slug}
          post={post}
          noBorder={
            (posts.length % 2 === 1 && index === posts.length - 1) ||
            (posts.length % 2 === 0 &&
              (index === posts.length - 1 || index === posts.length - 2))
          }
        />
      ))}
    </section>
  );
};

export default PostList;
