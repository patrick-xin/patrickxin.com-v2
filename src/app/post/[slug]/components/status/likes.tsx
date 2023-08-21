import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const PostLikeStats = ({
  slug,
  likes,
  setLikes,
}: {
  slug: string;
  likes: number | undefined;
  setLikes: (likes: number) => void;
}) => {
  const [isLiked, setLike] = useLocalStorage(slug, false);
  const [pending, setPending] = useState(false);

  const handleLike = async () => {
    if (isLiked) return;
    setPending(true);
    setLike(false);
    await fetch(`/post/${slug}/api/likes`);

    setLikes(likes! + 1);
    setPending(false);
  };
  return (
    <div className="flex items-center gap-1">
      <Button
        disabled={pending || isLiked}
        variant="ghost"
        onClick={handleLike}
        className={cn("relative", { "cursor-not-allowed": false })}
        size="icon"
      >
        {isLiked ? (
          <HeartFilledIcon className="h-4 w-4 text-red-600" />
        ) : (
          <HeartIcon className="h-4 w-4 text-red-600" />
        )}
      </Button>
      <div className="text-xs lg:text-sm">{likes}</div>
    </div>
  );
};

export default PostLikeStats;
