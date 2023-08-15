import PostCommentStats from "../status/comments";
import PostLikeStats from "../status/likes";
import PostViewStats from "../status/views";

type PostStatsProps = {
  slug: string;
};

const PostStats = ({ slug }: PostStatsProps) => {
  return (
    <div className="col-span-3 flex items-center justify-end gap-4 text-sm">
      <div className="hidden lg:block">
        <PostViewStats />
      </div>

      <div className="hidden lg:block">
        <PostLikeStats />
      </div>
      <div className="hidden lg:block">
        <PostCommentStats slug={slug} />
      </div>
    </div>
  );
};

export default PostStats;
