import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { usePostComments } from "../../hooks";

const PostCommentStats = ({ slug }: { slug: string }) => {
  const { commentsCount } = usePostComments(slug);
  return (
    <div className="flex items-center gap-1">
      <Button variant="ghost" size="icon" className="cursor-default">
        <ChatBubbleIcon className="h-4 w-4 text-green-700" />
      </Button>
      <div className="text-xs lg:text-sm">{commentsCount}</div>
    </div>
  );
};

export default PostCommentStats;
