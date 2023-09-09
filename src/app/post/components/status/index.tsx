"use client";

import PostCommentStats from "./comments";
import PostViewStats from "./views";
import PostLikeStats from "./likes";

type PostStatsProps = {
  slug: string;
};

const PostStats = ({ slug }: PostStatsProps) => {
  return (
    <div className="col-span-3 flex items-center justify-end gap-4 text-sm">
      <div className="hidden lg:block">
        <PostViewStats slug={slug} />
      </div>
      <div className="hidden lg:block">
        <PostLikeStats slug={slug} />
      </div>
      <div className="hidden lg:block">
        <PostCommentStats slug={slug} />
      </div>
    </div>
  );
};

export default PostStats;
