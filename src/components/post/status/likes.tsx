"use client";

import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { likePost } from "@/lib/actions";
import { useLocalStorage } from "@/lib/hooks";

const PostLikeStats = ({ slug, likes }: { slug: string; likes: number }) => {
  const [isLiked, setLike] = useLocalStorage(slug, false);
  return (
    <div className="flex items-center gap-1">
      <Button
        disabled={isLiked}
        variant="secondary"
        onClick={() => {
          if (isLiked) return;

          setLike(true);
          likePost({ slug });
        }}
        className={cn("relative", { "cursor-not-allowed": false })}
        size="icon"
      >
        {isLiked ? (
          <HeartFilledIcon className="h-4 w-4 text-red-600" />
        ) : (
          <HeartIcon className="h-4 w-4 text-red-600" />
        )}
      </Button>
      <div className="font-heading text-xs lg:text-sm">{likes}</div>
    </div>
  );
};

export default PostLikeStats;
