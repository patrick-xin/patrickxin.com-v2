import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const PostCommentStats = ({ comments }: { comments: number }) => {
  return (
    <div className="flex items-center gap-1">
      <Button variant="ghost" size="icon" className="cursor-default">
        <ChatBubbleIcon className="h-4 w-4 text-green-700" />
      </Button>
      <div className="text-xs lg:text-sm">{comments}</div>
    </div>
  );
};

export default PostCommentStats;
