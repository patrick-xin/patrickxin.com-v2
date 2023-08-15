import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const PostViewStats = () => {
  return (
    <div className="flex items-center gap-1">
      <Button variant="ghost">
        <EyeOpenIcon className="h-4 w-4 text-indigo-500" />
      </Button>
      <div className="text-xs lg:text-sm">20</div>
    </div>
  );
};

export default PostViewStats;
