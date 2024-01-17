import { ChatBubbleIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PostCommentStats = ({ comments }: { comments: number }) => {
  return (
    <div className="flex items-center gap-1">
      <Button size="icon" asChild variant="ghost">
        <Link href="#comments">
          <ChatBubbleIcon className="h-4 w-4 cursor-pointer text-green-500" />
        </Link>
      </Button>
      <div className="font-heading text-xs lg:text-sm">{comments}</div>
    </div>
  );
};

export default PostCommentStats;
