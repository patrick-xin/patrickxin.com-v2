"use client";

import type { Post } from "@prisma/client";
import { useEffect, useState } from "react";
import { useFetch } from "@/lib/hooks";
import PostCommentStats from "./comments";
import PostViewStats from "./views";
import PostLikeStats from "./likes";

type PostStatsProps = {
  slug: string;
};

const PostStats = ({ slug }: PostStatsProps) => {
  const { data, isPending } = useFetch<{ post: Post & { comments: number } }>(
    `/post/${slug}/api/stats`,
  );
  const [likes, setLikes] = useState(data?.post.like_count);
  useEffect(() => {
    setLikes(data?.post.like_count);
  }, [data]);
  if (isPending || !data) return null;
  return (
    <div className="col-span-3 flex items-center justify-end gap-4 text-sm">
      <div className="hidden lg:block">
        <PostViewStats slug={slug} views={data?.post.view_count} />
      </div>
      <div className="hidden lg:block">
        <PostLikeStats slug={slug} likes={likes} setLikes={setLikes} />
      </div>
      <div className="hidden lg:block">
        <PostCommentStats comments={data?.post.comments} />
      </div>
    </div>
  );
};

export default PostStats;
