import type { Post } from "contentlayer/generated";
import PostItem from "./item";

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <section>
      <ul className="w-full divide-y divide-slate-50">
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default PostList;
