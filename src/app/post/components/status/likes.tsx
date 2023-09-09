import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePostLikes } from "../../hooks";

const PostLikeStats = ({ slug }: { slug: string }) => {
  const { handleLike, isLiked, isLoading, likes } = usePostLikes(slug);

  return (
    <div className="flex items-center gap-1">
      <Button
        disabled={isLiked || isLoading}
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
