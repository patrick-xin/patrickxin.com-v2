import { HeartIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const PostLikeStats = () => {
  return (
    <div className="flex items-center gap-1">
      <Button variant="ghost">
        <HeartIcon className="h-4 w-4 text-red-600" />
      </Button>
      <div className="text-xs lg:text-sm">20</div>
    </div>
  );
};

export default PostLikeStats;
