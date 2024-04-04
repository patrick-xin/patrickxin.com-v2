import { prisma } from "@/lib/db";
import PostViewStats from "./views";
import PostLikeStats from "./likes";
import PostCommentStats from "./comments";

type PostStatsProps = {
  slug: string;
};

const PostStats = async ({ slug }: PostStatsProps) => {
  const post = await prisma.post.findUnique({
    where: { slug },
    include: {
      comments: true,
    },
  });
  if (!post) return null;
  return (
    <div className="col-span-3 flex items-center justify-end gap-4 text-sm">
      <div className="hidden lg:block">
        <PostViewStats slug={slug} views={post.view_count} />
      </div>
      <div className="hidden lg:block">
        <PostLikeStats slug={slug} likes={post.like_count} />
      </div>
      <div className="hidden lg:block">
        <PostCommentStats comments={post.comments.length} />
      </div>
    </div>
  );
};

export default PostStats;
