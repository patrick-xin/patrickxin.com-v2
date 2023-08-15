import { ChatBubbleIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PostCommentStats = ({ slug }: { slug: string }) => {
  return (
    <div className="flex items-center gap-1">
      <Button variant="ghost" asChild>
        <Link href={`/post/${slug}/#${slug}-comment`}>
          <ChatBubbleIcon className="h-4 w-4 text-green-700" />
        </Link>
      </Button>
      <div className="text-xs lg:text-sm">20</div>
    </div>
  );
};

export default PostCommentStats;
