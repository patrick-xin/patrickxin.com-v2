import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { usePostComments } from "../../hooks";

const PostCommentStats = ({ slug }: { slug: string }) => {
  const { commentsCount } = usePostComments(slug);
  const router = useRouter();
  return (
    <div className="flex items-center gap-1">
      <Button
        onClick={() => router.push(`/post/${slug}#comment`)}
        variant="ghost"
        size="icon"
        className="cursor-default"
      >
        <ChatBubbleIcon className="h-4 w-4 text-green-500" />
      </Button>
      <div className="font-heading text-xs lg:text-sm">{commentsCount}</div>
    </div>
  );
};

export default PostCommentStats;
